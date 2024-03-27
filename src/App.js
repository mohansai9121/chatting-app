//import { Button } from "rsuite";
import { Route, Routes } from 'react-router'
import 'rsuite/dist/rsuite.min.css';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Title from './pages/Title';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route element={<Title/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='*' element={<div><center><h2>Page Not found</h2></center></div>}/>
      </Routes>
    </div>
  );
}

export default App;
