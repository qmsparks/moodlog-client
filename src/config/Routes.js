import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import NewLog from '../pages/NewLog';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/logs/new' component={NewLog} />
    </Switch>
  )
}

export default Routes;