import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing/Landing";
import Team from "./pages/Team";
import Home from "./pages/home/Home";
import "./App.css";
import {ConnectWallet} from '@thirdweb-dev/react'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0e0c22]">
        <ConnectWallet />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<div>Not Found</div>} />
          </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;