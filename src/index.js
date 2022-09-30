import ReactDOM from "react-dom/client";
import { Header } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProfilePage, ChatPage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store"
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  </Provider>
);
