import { useState } from "react";
import AppRouter from "./AppRouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Open Financial Calculator</h1>
      <div>
        <a href="/">Home</a>&nbsp;&bull;&nbsp;
        <a href="/ror">Rate of Return</a>&nbsp;&bull;&nbsp;
        <a href="/fv">Future Value</a>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
