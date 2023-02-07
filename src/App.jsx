
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Info from './Info'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
