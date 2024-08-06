import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing/Landing";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
