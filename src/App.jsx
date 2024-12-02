import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Code from "./components/code/Code";
import FormBuilder from "./components/form-builder/Builder";
import Preview from "./components/preview/Preview";
import EditBuilder from "./pages/EditBuilder";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
import Templates from "./pages/Templates";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/builder" element={<FormBuilder />} />
          <Route path="/builder/:id" element={<EditBuilder />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
