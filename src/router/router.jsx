import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
