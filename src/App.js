import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="main">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
