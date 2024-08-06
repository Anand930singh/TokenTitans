import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
//import { ConnectWallet } from '@thirdweb-dev/react';
import { ThirdwebProvider } from '@thirdweb-dev/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  
  </React.StrictMode>
);
