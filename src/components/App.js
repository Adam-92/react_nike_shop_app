import '../index.css'
//CSS transition between components
import {CSSTransition, TransitionGroup} from 'react-transition-group'
//To move between components
import {Switch, Route, useLocation, Redirect} from 'react-router-dom'
//Register page component
import Register from '../page/Register'
//Error if you get somewhere where address doesn't exist, f.ex 'host/somewhere'
import Error from '../page/Error'
//Login page component
import Login from '../page/Login'
//ShoppingPage component
import ShoppingPage from '../page/ShoppingPage'
//Protected route function - to secure route. In this example '/shoppingPage/user'
import PrivateRoute from './PrivateRoute'

function App () {
  //Location need to create individual key 
  const location = useLocation();
  //Wraped into TransitionGroup for transition beetewen routes
  return (
        <TransitionGroup>
          <CSSTransition 
            timeout={1000}
            classNames="fade"
            key={location.key}
          >
            <Switch location={location}>
              <Redirect from="/" to="/register" exact/>
              <Route path="/register" component={Register} exact />
              <Route path="/login" component={Login} exact />
              {/*Private route*/}
             {<PrivateRoute path="/shoppingPage/user" component={ShoppingPage} exact />}
              <Route path="*" 
                     render={ (props)=>(
                        <Error {...props} text="Ooops wrong way, please go back" />
                     )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
  );
}

export default App;
