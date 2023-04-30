import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Content from "./pages/Content";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}
