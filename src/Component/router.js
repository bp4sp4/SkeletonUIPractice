import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DressList from "./dress/dress";
import MakeupList from "./dress/makeup";
import StudioList from "./dress/studio";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DressList />} />
        <Route path="/dress/makeup" element={<MakeupList />} />
        <Route path="/dress/studio" element={<StudioList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
