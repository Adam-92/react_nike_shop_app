import './index.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Switch, Route, useLocation} from 'react-router-dom'
import Register from './page/Register'
import Error from './page/Error'
import Login from './page/Login'
import ShoppingPage from './page/ShoppingPage'

function App () {
  const location = useLocation();
  return (
        <TransitionGroup>
          <CSSTransition 
            timeout={1000}
            classNames="fade"
            key={location.key}
          >
            <Switch location={location}>
              <Route path="/" exact>
                <Register />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/user">
                <ShoppingPage/>
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
  );
}

export default App;
