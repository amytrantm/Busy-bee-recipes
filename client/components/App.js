import React from 'react'
import Routes from './Routes'
import { Jumbotron, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const App = () => {
   return (
      <div >
         <Jumbotron fluid >
            <div className="container">
               <div className="row">
                  <div className="col">
                     <h1>Busy Bee Recipes</h1>
                     <h2>Easy and quick meals </h2>
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
               <NavItem>
                  <NavLink className="nav-link" to='/favorite-recipes'> 🔖  Favorites </NavLink>
               </NavItem>
            </Nav>
         </Navbar>
         <Routes />
      </div>
   )
}

export default App