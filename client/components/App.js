import React from 'react'
import Routes from './Routes'
import { Jumbotron, Nav, Navbar, NavItem, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { logout } from "../redux/auth";
import { connect } from "react-redux";


const App = ({handleClick, isLoggedIn}) => {
   return (
      <div >
         <Jumbotron fluid >
            <div className="container">
               <div className="row">
                  <div className="col">
                     <h1>Busy Bee Recipes</h1>
                     <h2>Easy and quick meals 👨‍🍳 👩‍🍳  </h2>
                  </div>
               </div>
            </div>
         </Jumbotron>
         <Navbar sticky="top" style={{ backgroundColor: '#f1f1f1' }}>
            <Nav >
               <NavItem>
                  <NavLink className="nav-link" to="/">
                     <i className="fas fas-home fa-lg" /> 🏠  Home
                  </NavLink>
               </NavItem>
               {
                  isLoggedIn && (
                     <>
                        <NavItem>
                           <NavLink className="nav-link" to='/favorite-recipes'> 🔖  Favorites </NavLink>
                        </NavItem>
                        {/* <NavItem>
                           <NavLink className="nav-link" to='/saved-recipes'> Saved </NavLink>
                        </NavItem> */}
                     </>
                  )
               }
               { isLoggedIn ? (
                     <NavItem id="logout">
                        <Link to="/">
                        <Button outline color='warning' onClick={handleClick}>
                              Sign Out
                           </Button>
                        </Link>
                     </NavItem>
                  ) : (
                        <NavItem>
                           <NavLink className="nav-link" to='/login'>Sign In </NavLink>
                        </NavItem>
                  )
               }
            </Nav>
         </Navbar>
         <Routes />
      </div>
   )
}

const mapState = (state) => {
   return {
      isLoggedIn: !!state.auth.id,
   };
};

const mapDispatch = (dispatch) => {
   return {
      handleClick: () => dispatch(logout())
   };
};
export default connect(mapState, mapDispatch)(App);
