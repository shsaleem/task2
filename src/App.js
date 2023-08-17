import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
