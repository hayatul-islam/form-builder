import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/builder" element={<Builder />} />
          <Route path="/builder/:id" element={<FormBuilder />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
