import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Navigation from './components/Navigation.jsx';

import './App.css';
import { Suspense } from 'react';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation/>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/register' Component={RegisterPage}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
