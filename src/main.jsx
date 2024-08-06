import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnonAadhaarProvider
      _useTestAadhaar={true}
      _fetchArtifactsFromServer={true} // or false, depending on your setup
    >
      <App />
    </AnonAadhaarProvider>
  </React.StrictMode>
);
