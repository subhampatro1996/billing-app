import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import { Redirect, withRouter } from "react-router";
import Account from "../screens/Account";
import CustomerContainer from "../customer-screen/CustomerContainer";
import ProductsContainer from "../product-screen/ProductsContainer";
import '../CSS/navbar.css'
import AllCustomers from '../customer-screen/AllCustomers';
import CustomerList from "../customer-screen/CustomerList";
import ProductsList from "../product-screen/ProductsList";
// import BillingForm from '../billing-screen/BillingForm';
import BillingContainer from '../billing-screen/BillingContainer';
import AllBills from "../billing-screen/AllBills";
import BillingGenerator from "../billing-screen/BillingGenerator";
const NavBar = (props) => {
  const { isLoggedIn, handleAuth } = props;
  return (
    <div className="conatiner">
      {/* <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-dark ">
        
       <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav d-flex">
          <li><Link to="/">Home</Link></li>
          {isLoggedIn ? (
            <div>
            <li className="nav-item active"><Link to="/account">Account</Link></li>
            <li className="nav-item"><Link to="/customers">Customers</Link></li>
            <li className="nav-item"><Link to="/products">Products</Link></li>
            <li className="nav-item"><Link to="/logout" onClick={()=>{
              localStorage.removeItem("token")
              alert("successfully logged out")
              props.history.push('/')
              handleAuth()

            }}>Logout</Link></li>
            </div>
            ) :(
              <div>
              <li className="nav-item"><Link to="/register">Register</Link></li>
              <li className="nav-item"><Link to="/login">Login</Link></li>
              </div>
            )
           } 
           </ul>
        </div>
        </nav> */}
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <a className="navbar-brand p-2" href="#">
          <b>POS APP</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto" >
            <li className="nav-item active p-2" style={{textDecoration:"none"}}>
                <Link to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li> */}
            {isLoggedIn ? (
            <>
            <li className="nav-item active p-2"><Link to="/account">Account</Link></li>
            <li className="nav-item p-2"><Link to="/customers">Customers</Link></li>
            <li className="nav-item p-2"><Link to="/products">Products</Link></li>
            <li className="nav-item p-2"><Link to="/allcustomer">AllCustomers</Link></li>
            <li className="nav-item p-2"><Link to="/allproduct">AllProduct</Link></li>
            <li className="nav-item p-2"><Link to="/billing">Billing</Link></li>
            {/* <li className="nav-item p-2"><Link to="/allbills">AllBills</Link></li> */}
            <li className="nav-item p-2"><Link to="/logout" onClick={(e)=>{
              e.preventDefault()
              localStorage.removeItem("token")
              alert("successfully logged out")
              props.history.push('/login')
              handleAuth()

            }}>Logout</Link></li>
            </>
            ) :(
              <>
              <li className="nav-item p-2"><Link to="/register">Register</Link></li>
              <li className="nav-item p-2"><Link to="/login">Login</Link></li>
              </>
            )
           } 
            
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/register" component={Register}></Route>
        <Route
          path="/login"
          render={(props) => {
            return <Login {...props} handleAuth={handleAuth} exact />;
          }}
        />
        <Route path="/account" component={Account} />
        <Route path="/customers" component={CustomerContainer} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/allcustomer" component={CustomerList} />
        <Route path="/billing" exact component={BillingContainer} />
        {/* <Route path="/allbills" component={AllBills} /> */}
        <Route path="/allproduct" component={ProductsList} />
        <Route path='/billing/:billId' component={BillingGenerator} exact={true}/>
        <Route path="/bills/all" component={AllBills}/>
      </Switch>
    </div>
  );
};

export default withRouter(NavBar);
