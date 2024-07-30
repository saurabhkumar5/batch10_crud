import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import User from './User';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUser from './CreateUser';
import Update from './Update';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
