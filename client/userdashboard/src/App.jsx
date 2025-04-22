import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import LogIn from './components/LogIn';

function App() {

  return (
  
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<LogIn/>} />
    </Routes>
      
  )
}

export default App
