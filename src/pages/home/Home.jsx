import React, { useEffect } from "react";
import "./Home.css";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const address = useAddress();
  const navigate = useNavigate();
  useEffect(() => {
    if (!address) {
      navigate("/");
    }
  }, [address, navigate]);
  return (
    <div className="text-white">
      <div>Hello From Home</div>
    </div>
  );
}

export default Home;
