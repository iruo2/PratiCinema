import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Rules from './Rules'
import Home from './Home'
import FilmList from './FilmList'
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

