import React from "react";
import "./App.css";
import Burger from "./components/burger/Burger";
import Layout from "./components/header/Layout";

function App() {
  return (
    <div className='App'>
      <Layout />
      <Burger />
      <div className='control'>control</div>
    </div>
  );
}

export default App;
