import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import Carousel from './Carousel';

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="home">
        {isLoggedIn ? (
          <h2>Welcome to Busy Bee Recipes! </h2>
        ) : (
          <Container>
            <h4> Let's make a yummy meal today! </h4>
            <h5>Sign in to save recipes to favorite</h5>
            <SearchForm />
          </Container>
        )}
        <div style={{ width: '700px', margin: '2em' }}>
          <Carousel />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log('home state', state);
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState)(Home);
