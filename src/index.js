import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import {Header} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage, ProfilePage, ChatPage} from "./pages";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({

});

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/chats/*" element={<ChatPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
