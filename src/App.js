import './index.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './page/Register'
import Error from './page/Error'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
           <Register />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
