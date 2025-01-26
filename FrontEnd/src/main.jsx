import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { FlavorsProvider } from './util/FlavorsContext.jsx';
import { CartProvider } from './util/CartContext.jsx';
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <FlavorsProvider>
        <CartProvider>
          <App />
          </CartProvider>
        </FlavorsProvider>
    </BrowserRouter>
    </StrictMode>
)
