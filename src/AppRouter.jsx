import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import RateOfReturn from "./components/RateOfReturn";
import FutureValue from "./components/FutureValue";
import FutureAmount from "./components/FutureAmount";
import CapitalDepletion from "./components/CapitalDepletion";
import MajorPurchase from "./components/MajorPurchase";
import DesiredIncome from "./components/DesiredIncome";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ror" element={<RateOfReturn />} />
        <Route path="/fv" element={<FutureValue />} />
        <Route path="/fa" element={<FutureAmount />} />
        <Route path="/cd" element={<CapitalDepletion />} />
        <Route path="/mp" element={<MajorPurchase />} />
        <Route path="/di" element={<DesiredIncome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

