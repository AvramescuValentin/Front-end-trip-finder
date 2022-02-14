import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Profile from './pages/users/Profile';
import TripPage from './pages/trips/TripPage';
import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';
import TripSearch from './pages/trips/TripSearch';
import Navbar from './components/Navbar';



const App = () => {
  return (

    <Router>
      <Navbar>
        <Switch>
          <Route path='/signIn' exact>
            <SignIn />
          </Route>
          <Route path='/signUp' exact>
            <SignUp />
          </Route>
          <Route path='/profile' exact>
            <Profile />
          </Route>
          <Route path='/tripPage' exact>
            <TripPage />
          </Route>
          <Route path='/tripSearch' exact>
            <TripSearch />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Navbar>
    </Router>


  );
}

export default App;
