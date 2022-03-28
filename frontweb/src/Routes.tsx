import Navbar from 'components/Navbar';
import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import Reviews from 'Pages/Reviews';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:moveisId">
        <Reviews />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default Routes;
