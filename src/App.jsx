import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Input from './component/Input'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Countryinfo from './pages/Countryinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='bg-[#202c37] '>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/countryinfo/:countryName' element={<Countryinfo />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
