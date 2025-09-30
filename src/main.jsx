import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tic from './tictactoe/tic.jsx'
import Weather from './weather/Weather.jsx'
import TestWeather from './TestWeather/TestWeather.jsx'
import ServeYou from './serveyou/ServeYou.jsx'
import Test from './serveyou/test.jsx'
import PassingParam from './serveyou/test1.jsx'
import TestRedux from './serveyou/testredux.jsx'
import TestCustomHooks from './serveyou/TestCustomHooks.jsx'
import ReactForm from './serveyou/reactforms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactForm />
  </StrictMode>,
)
