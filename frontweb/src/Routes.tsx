import Navbar from 'components/Navbar';
import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import Reviews from 'Pages/Reviews';
import {   Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/movies" exact >
        <Movies />
      </Route>
      <Route path="/movies/:moveisId">
        <Reviews />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
