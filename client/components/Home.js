import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import SearchForm from './SearchForm'

class Home extends Component {

   render() {
      const { isLoggedIn } = this.props;

      return (
         <div className='home'>
            {
               isLoggedIn ? 
               ( <SearchForm />) :
               (<div> 
                  <Link to='/login'><Button>Login</Button></Link>
                  <SearchForm/>
               </div>
               )
            }
           
         </div>
      )
   }
}

const mapState = (state) => {
   return {
      isLoggedIn: !!state.auth.id,
   };
};

export default connect(mapState)(Home)