import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import NewGame from './NewGame.jsx';
import Stats from './Stats.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new-game" component={NewGame} />
        <Route path="/stats" component={Stats} />
      </Switch>
    </Router>
  );
}

export default App;
