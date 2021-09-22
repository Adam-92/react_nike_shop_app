import './index.css'
//CSS transition between components
import {CSSTransition, TransitionGroup} from 'react-transition-group'
//To move between components
import {Switch, Route, useLocation} from 'react-router-dom'
//Register page component
import Register from './page/Register'
//Error if you get somewhere where address doesn't exist, f.ex 'host/somewhere'
import Error from './page/Error'
//Login page component
import Login from './page/Login'
//ShoppingPage component
import ShoppingPage from './page/ShoppingPage'
//Protected route function - to secure route. In this example '/shoppingPage/user'
import PrivateRoute from './components/PrivateRoute'

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
              {/*Private route*/}
             {<PrivateRoute path="/shoppingPage/user" component={ShoppingPage} exact />}
              {/* <Route path='/ShoppingPage/user' component={ShoppingPage} exact /> */}
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
  );
}

export default App;
