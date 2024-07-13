import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import Stock from "./Stock";
import StockNews from "./StockNews";

function App() {
  return (
    <div>
      <NavBar />
      <Stock />
      <StockNews />
    </div>
  );
}

export default App;
