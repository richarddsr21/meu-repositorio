import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="mx-auto md:p-5 md:max-w-[1056px] flex justify-center">
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  </div>
);
