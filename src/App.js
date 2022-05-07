import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Profile from './pages/users/Profile';
import TripPage from './pages/trips/TripPage';
import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';
import TripSearch from './pages/trips/TripSearch';
import Navbar from './components/Navbar';
import MyTrips from './pages/trips/MyTrips';
import NewTrip from './pages/trips/NewTrip';
import Copyright from './components/Copyright';
import { AuthContext } from './util/auth-context';
import { useAuth } from './util/auth-hook';
import AddTrip from './pages/trips/AddTrip';


const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Navbar>
        <Switch>
          <Route path='/profile' exact>
            <Profile />
          </Route>
          <Route path='/myTrips' exact>
            <MyTrips />
          </Route>
          <Route path='/tripPage/:id'>
            <TripPage />
          </Route>
          <Route path='/tripSearch' exact>
            <TripSearch />
          </Route>
          <Route path='/newTrip' exact>
            <AddTrip />
          </Route>
          <Redirect to='/tripSearch' />
        </Switch>
      </Navbar>
    )

  } else {
    routes = (
      <Switch>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
        <Route path="/signUp" exact>
          <SignUp />
        </Route>
        <Redirect to='/signIn' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
