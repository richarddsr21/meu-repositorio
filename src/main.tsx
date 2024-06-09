import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/header";
import { Hero } from "./Components/Hero";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="md:max-w-[1056px] h-full mx-auto md:p-5 flex flex-col justify-center drop-shadow-lg pb-12">
    <React.StrictMode>
      <Header />
      <Hero />
    </React.StrictMode>
  </div>
);
