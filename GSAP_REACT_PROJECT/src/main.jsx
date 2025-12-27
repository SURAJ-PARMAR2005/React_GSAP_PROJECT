import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import Stair from './Components/common/Stair.jsx'
import NavContext from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
      <Stair> 
        <NavContext>
            <App />
        </NavContext>
      </Stair>
    </BrowserRouter>
    </StrictMode> ,
)
