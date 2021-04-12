import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import LogCreation from '../pages/LogCreation';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/logs/new' component={LogCreation} />
    </Switch>
  )
}

export default Routes;