// import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bath from './pages/Bath';
import Schedule from './pages/Schedule';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bath">Banho</Link>
            </li>
            <li>
              <Link to="/schedule">Agendar</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bath" component={Bath} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
