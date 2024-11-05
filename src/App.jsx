import { BrowserRouter, Route, Routes } from "react-router-dom";
import Builder from "./pages/Builder";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
