import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "../pages/notFound";
// import Home from "../pages/home";
import Projects from "../pages/projects";
import { Pricing } from "../pages/pricing";

import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { TypesOfJob } from "../pages/typesOfJob";

const Router = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/types_of_job" element={<TypesOfJob />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
