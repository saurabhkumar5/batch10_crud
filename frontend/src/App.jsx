import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import User from './User';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUser from './CreateUser';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/create' element={<CreateUser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
