import React from "react";
import "./App.css";
import Burger from "./components/burger/Burger";
import Layout from "./components/header/Layout";
import IntervalExample from "./Interval";

function App() {
  return (
    <div className='App'>
      <Layout />
      <Burger />
    </div>
  );
}

export default App;
