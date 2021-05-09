import React, { Component } from 'react';
import { Button,Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Recipe from './Recipe'

class FavoriteRecipes extends Component {
   constructor(props) {
      super(props)
      this.state = {
         user: props.user || null
      }
   }
   
   render(){
      const { favoriteRecipeIds } = this.state.user
      if (favoriteRecipeIds.length === 0) {
         return <div>There are no favorites.</div>
         // (<div>
         //    <p>There are no favorites. </p>
         //    <div>
         //    <Link to={`/`}> Please add new recipe</Link>
         //    </div>
         // </div>)
      }

      return(
         <Container>
            <Row>
               <Col>
                  <Breadcrumb>
                     <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                     <BreadcrumbItem active>Favorite Recipes</BreadcrumbItem>
                  </Breadcrumb>
               </Col>
            </Row>

            <Row>
               {
                  (favoriteRecipeIds || []).map(id => (
                     <div key={`recipe-${id}`}>
                        <Button outline color="success" size="small" >
                           <Link to={`/recipes/${id}/information`}>View Recipe</Link>
                        </Button>
                     </div>
                  ))
               }
            </Row>
         </Container>
         
      )
   }
}

const mapState = state => {
   return {
      user: state.auth
   }
}

export default connect(mapState)(FavoriteRecipes)