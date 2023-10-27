import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx'
import './index.css'
import QueryClientProviderConf from "./provider/QueryClientProvider";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProviderConf>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </QueryClientProviderConf>
  </React.StrictMode>,
)
