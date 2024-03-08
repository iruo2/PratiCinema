import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Rules from './components/Rules'
import Home from './components/Home'
import FilmList from './components/FilmList'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header />

      <div className='mainPos'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/film' element={<FilmList/>}/>
          <Route path='/rules' element={<Rules/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App

