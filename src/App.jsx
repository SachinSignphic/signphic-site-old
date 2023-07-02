import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Card from './pages/Card'
import Testimonial from './pages/Testimonial'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/card' element={<Card />} />
      <Route path='/testimonial' element={<Testimonial />} />
    </Routes>
  )
}

export default App
