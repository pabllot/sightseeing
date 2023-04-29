import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Section from "./components/Section";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Section />} />
      </Routes>
    </BrowserRouter>
  );
}
