import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Navigation from './components/Navigation.jsx';

import './App.css';
import { Suspense } from 'react';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="app">
      <Router>
        <Navigation/>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/register' Component={RegisterPage}></Route>
          </Routes>
        </Suspense>
      </Router>
      <p>Welcome, {user ? user.username : 'Guest'}!</p>
      <p>
        User Details:
        Email: {user ? user.email: "Email"}
        Location: {user ? user.location : "Location"}
        Sports: {user ? user.sports : "Sports"}
      </p>
    </div>
  );
}

export default App;
