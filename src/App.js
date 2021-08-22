import logo from './logo.svg';
import './App.css';
import FormSend from './FormSend';
import Tables from './Table';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
          <Route
           exact path="/"
          >
           <FormSend />
          </Route>
          <Route
           exact path="/table"
          >
           <Tables />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
