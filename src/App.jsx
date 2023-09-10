import { useState } from "react";
import AppRouter from "./AppRouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Open Financial Calculator</h1>
      <div className="strong">
        <a href="/">Home</a>&nbsp;&bull;&nbsp;
        <a href="/ror">Rate of Return</a>&nbsp;&bull;&nbsp;
        <a href="/fv">Future Value</a>&nbsp;&bull;&nbsp;
        <a href="/fa">Future Amount</a>&nbsp;&bull;&nbsp;
        <a href="/cd">Capital Depletion</a>&nbsp;&bull;&nbsp;
        <a href="/mp">Major Purchase</a>&nbsp;&bull;&nbsp;
        <a href="/di">Desired Income</a>
      </div>
      <hr/>
      <AppRouter />
    </div>
  );
}

export default App;
