import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {

  const url = "http://localhost:5000/api"

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/Home' element={<Home />} ></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
