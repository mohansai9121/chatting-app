//import { Button } from "rsuite";
import { Route, Routes } from 'react-router'
import 'rsuite/dist/rsuite.min.css';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
