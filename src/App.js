import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './Home/Home';

function App() {
  return (
   <Router>
    <div>
      <Switch>
      <Route path ="/studybuddy" component={Home}></Route>
        {/* <Route exact path="/login" Component={LoginPage}></Route>
        <PrivateRoute path ="/studybuddy" component={Home}></PrivateRoute>
        <PrivateRoute path ="/loansection" component={LoanPage}></PrivateRoute> */}
      </Switch>
    </div>
   </Router>
  );
}

export default App;
