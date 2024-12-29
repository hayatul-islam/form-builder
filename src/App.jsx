import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Preview from "./components/preview/Preview";
import EditBuilder from "./pages/EditBuilder";
import FormBuilder from "./pages/FormBuilder";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
import Templates from "./pages/Templates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-forms" element={<Forms />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/builder" element={<FormBuilder />} />
        <Route path="/builder/:id" element={<EditBuilder />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
