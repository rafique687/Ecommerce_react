import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Box from './Box.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Box heading="h1" content="box first content" id="1"/>
     <Box heading="h2" content="box first content" id="2"/>
      <Box heading="h3" content="box first content" id="3"/>
      <Box heading="h4" content="box first content" id="4"/>

  </StrictMode>,
)
