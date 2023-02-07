
import './App.css'
import Main from './Main'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Info from './Info'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
