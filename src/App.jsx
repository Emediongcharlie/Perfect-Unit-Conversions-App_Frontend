import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import CalculationPage from './Components/CalculationPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="/" element={<CalculationPage />}>
        </Route>
      </Routes> */}
      
      </BrowserRouter>
    </div>
  )
}

export default App
