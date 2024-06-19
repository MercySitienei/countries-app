import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import { useContext } from "react";
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Home';
import Country from './components/Country';



function App() {
  const {theme} = useContext (ThemeContext)


  return (
    <Router>
          <div className= {`${theme==='light' ? 'bg-light-bg' : 'bg-dark-bg'} flex flex-col `}>
        <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/countries/:name' element={<Country/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
