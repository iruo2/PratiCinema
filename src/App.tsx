import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Rules from './Rules'

function App() {

  return (
    <div className='App'>
      <Header />

      <div className='mainPos'>
        <Routes>
          <Route path='/rules' element={<Rules/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
