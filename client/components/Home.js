import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm';

class Home extends Component {

   render() {
      return (
         <div className='home'>
            <SearchForm/>
         </div>
      )
   }
}

export default Home