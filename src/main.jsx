import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import { ThirdwebProvider } from '@thirdweb-dev/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider>    <AnonAadhaarProvider
      _useTestAadhaar={true}
      _fetchArtifactsFromServer={true} // or false, depending on your setup
    >
      <App />
    </AnonAadhaarProvider>
    </ThirdwebProvider>

  </React.StrictMode>
);
