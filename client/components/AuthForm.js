import React from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import { authenticate } from '../redux/store';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <Container>
      <Form onSubmit={handleSubmit} name={name}>
        <Row form>
          <FormGroup>
            <Label htmlFor="email">
              <small>Email*</small>
            </Label>
            <Input name="email" type="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">
              <small>Password*</small>
            </Label>
            <Input name="password" type="password" />
          </FormGroup>
        </Row>
        <FormGroup>
          <Button block color="success" type="submit">
            {displayName}
          </Button>
        </FormGroup>
        {error && error.response && <div> {error.response.data} </div>}
      </Form>
      {name === 'login' ? (
        <p>
          New User ?
          <span>
            <Link to="/signup">Sign Up here</Link>
          </span>
        </p>
      ) : (
        <p>
          Already have an account?
          <span>
            <Link to="/login">Sign In</Link>
          </span>
        </p>
      )}
    </Container>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
