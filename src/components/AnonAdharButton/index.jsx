import React, { useEffect } from "react";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";

const AnonAadhaarButton = () => {
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log("User is logged in:", anonAadhaar.status);
      console.log("Latest Proof:", latestProof);
    }
  }, [anonAadhaar, latestProof]);

  return (
    <div
      className="flex flex-col items-center space-y-2 py-4 px-8
     text-white rounded-lg shadow-lg"
    >
      <LogInWithAnonAadhaar
        nullifierSeed={1941541791242045138202208339618114012314093}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      />
      <p className="text-sm mt-2">{anonAadhaar?.status}</p>
      {anonAadhaar?.status === "logged-in" && (
        <div className="w-full p-4 mt-4 bg-[#0e0c22] bg-opacity-10  rounded-md shadow-inner">
          <p className="text-green-400 font-semibold mb-2">✅ Proof is valid</p>
          {latestProof && (
            <div className="mt-4 bg-[#0e0c22] bg-opacity-10  p-4 rounded-md">
              <h3 className="text-lg text-white mb-2">Latest Proof</h3>
              <pre className="overflow-auto text-xs bg-[#1c1845] bg-opacity-10 p-4 rounded-lg hover:text-purple-400 cursor-pointer outline">
                {JSON.stringify(latestProof, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnonAadhaarButton;
