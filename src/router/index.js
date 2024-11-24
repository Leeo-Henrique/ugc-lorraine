import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
import Projects from "../pages/projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
