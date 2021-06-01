import React, { useState } from 'react';
import Routes from './Routes';
import {
  Jumbotron,
  Nav,
  Navbar,
  NavItem,
  Button,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../redux/auth';
import { connect } from 'react-redux';
import Logo from '../../public/bee.png';
import SearchForm from './SearchForm';

const App = ({ handleClick, isLoggedIn }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
      <Jumbotron fluid>
        <Row>
          <Col xs="5" sm="2">
            <img
              style={{ width: '95%' }}
              className="rounded-circle"
              src={Logo}
            />
          </Col>
          <Col>
            <h1> Busy Bee Recipes</h1>
            <h2>Easy recipes for everyone 👨‍🍳 👩‍🍳 </h2>
          </Col>
        </Row>
      </Jumbotron>

      <Navbar sticky="top" style={{ backgroundColor: '#fffbdf' }}>
        <Nav className="container-fluid">
          <NavItem>
            <NavLink to="/">🏠 Home</NavLink>
          </NavItem>
          {isLoggedIn && (
            <>
              <NavItem>
                <NavLink to="/favorite-recipes"> 🔖 Favorites </NavLink>
              </NavItem>
              {/* <NavItem>
                           <NavLink className="nav-link" to='/saved-recipes'> Saved </NavLink>
                        </NavItem> */}
            </>
          )}

          <NavItem className="nav-item-right">
            {isLoggedIn ? (
              <Col className="nav-right">
                <SearchForm />

                <ButtonDropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  style={{ fontSize: '1rem' }}
                >
                  <DropdownToggle caret color="warning" />
                  <DropdownMenu right>
                    <DropdownItem onClick={handleClick}>Sign Out</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
            ) : (
              <NavLink to="/login">
                <Button outline color="primary">
                  Sign In
                </Button>
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </Navbar>

      <Routes />
    </>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick: () => dispatch(logout()),
  };
};
export default connect(mapState, mapDispatch)(App);
