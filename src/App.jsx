import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Code from "./components/code/Code";
import FormBuilder from "./components/form-builder/Builder";
import Preview from "./components/preview/Preview";
import Builder from "./pages/Builder";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Builder />} />
          <Route path="/builder" element={<FormBuilder />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
