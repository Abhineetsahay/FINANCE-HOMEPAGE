
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Home/Navbar'
import MainPart from './components/Home/Main.home'
import Promo from './components/Home/Promo'
import Footer from './components/Home/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar /> <MainPart /> <Promo/> <Footer/></>} />
      </Routes >
    </>
  )
}

export default App
