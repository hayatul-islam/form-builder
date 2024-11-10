import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DesignerContextProvider from "./context/DesignerContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DesignerContextProvider>
      <App />
      <div id="portal-root"></div>
    </DesignerContextProvider>
  </StrictMode>
);
