import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/header";
import { Sobre } from "./Components/Sobre";
import { Habilidades } from "./Components/Habilidades";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="md:max-w-[1056px] h-full mx-auto md:p-5 flex flex-col justify-center pb-12">
    <React.StrictMode>
      <Header />
      <div className="w-full h-full">
        <Sobre />
      </div>
      <div className="w-full h-full">
        <Habilidades />
      </div>
    </React.StrictMode>
  </div>
);
