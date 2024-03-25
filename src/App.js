//import { Button } from "rsuite";
import { Routes } from 'react-router'
import 'rsuite/dist/rsuite.min.css';
import SignIn from './pages/SignIn';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
      <PublicRoute path='/signIn'>
          <SignIn/>
        </PublicRoute>
        <PublicRoute path='/'>
          <Home/>
        </PublicRoute>
      </Routes>
    </div>
  );
}

export default App;
