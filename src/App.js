import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './Home/Home';
import RentPage from './RentPage/RentPage';
import TuitionFeePage from './TuitionFeePage/TuitionFeePage';
import CourseMaterialsPage from './CourseMaterialsPage/CourseMaterialsPage';

import Homepage from './TechSuppliesPage/Homepage';
import ProductDetail from './TechSuppliesPage/ProductDetail';
import ProductListing from './TechSuppliesPage/ProductListing';

function App() {
  return (
   <Router>
    <div>
      <Switch>
      <Route path ="/study-buddy-app" component={Home}></Route>
      <Route path ="/rentPage" component={RentPage}></Route>
      <Route path ="/tuition-Fee-Page" component={TuitionFeePage}></Route>
      <Route path ="/courseMaterialsPage" component={CourseMaterialsPage}></Route>
      <Route path ="/techSuppliesPage/products/:id" component={ProductDetail}></Route>
      <Route path ="/techSuppliesPage/products" component={ProductListing}></Route>
     
      
        {/* <Route exact path="/login" Component={LoginPage}></Route>
        <PrivateRoute path ="/studybuddy" component={Home}></PrivateRoute>
        <PrivateRoute path ="/loansection" component={LoanPage}></PrivateRoute> */}
      </Switch>
    </div>
   </Router>
  );
}

export default App;
