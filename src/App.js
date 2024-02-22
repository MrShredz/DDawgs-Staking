import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routes from './Routes';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { ExchangeFromTokenProvider } from './contexts/ExchangeFromTokenContext';
import { ExchangeToTokenProvider } from './contexts/ExchangeToTokenContext';
import { BuyFromTokenProvider } from './contexts/BuyFromTokenContext';
import { BuyToTokenProvider } from './contexts/BuyToTokenContext';
import { ChainId, DAppProvider } from '@usedapp/core';

const theme = createTheme({});

const config = {
  // readOnlyChainId: ChainId.BSCTestnet,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AlertMessageProvider>
          <DAppProvider config={config}>
            <ExchangeFromTokenProvider>
              <ExchangeToTokenProvider>
                <BuyFromTokenProvider>
                  <BuyToTokenProvider>
                    <Router>
                      <Routes />
                    </Router>
                  </BuyToTokenProvider>
                </BuyFromTokenProvider>
              </ExchangeToTokenProvider>
            </ExchangeFromTokenProvider>
          </DAppProvider>
        </AlertMessageProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
