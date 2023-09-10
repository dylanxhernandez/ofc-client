import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import RateOfReturn from "./components/RateOfReturn";
import FutureValue from "./components/FutureValue";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ror" element={<RateOfReturn />} />
        <Route path="/fv" element={<FutureValue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

