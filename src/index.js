import ReactDOM from "react-dom/client";
import { Header, PublicRoute, PrivateRoute } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProfilePage, ChatPage, GistsPage, LoginPage, SignUpPage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import "./global.css";
import { useEffect, useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));



const App = () => {
  const [session, setSession] = useState(null);
  const isAuth = session?.email;


  useEffect( () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setSession(user);
        }else {
          setSession(null);
        };

      });
  },[]);
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Header email={isAuth} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={
              <PrivateRoute isAuth={isAuth}>
                <ProfilePage />
              </PrivateRoute>} />
            <Route path="/chat/*" element={
              <PrivateRoute isAuth={isAuth}>
                <ChatPage />
              </PrivateRoute>
            } />
            <Route path="/gists" element={
              <PrivateRoute isAuth={isAuth}>
                <GistsPage />
              </PrivateRoute>
            } />
            <Route path="/login" element={
              <PublicRoute isAuth={isAuth}>
                <LoginPage />
              </PublicRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute isAuth={isAuth}>
                <SignUpPage />
              </PublicRoute>
            } />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
}

root.render(
  <App />
);
