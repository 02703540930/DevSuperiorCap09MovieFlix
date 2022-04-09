import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import Reviews from 'Pages/Reviews';
import { Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Movies/>
        </Route>
        <Route path="/movies/:movieId">
          <Reviews />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);
export default Routes;
