import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing/Landing";
import Team from "./pages/Team";
import Home from "./pages/home/Home";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
 import { ConnectWallet } from "@thirdweb-dev/react";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ConnectWallet />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/home" element={<Home/>}/>
         {/* <Route path='/test' element = {<ConnectWalletComponent />}/>  */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
