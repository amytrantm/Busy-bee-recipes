import React, { Component } from 'react';
import { Button, Container, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardTitle, CardImg} from 'reactstrap'
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
      const { favRecipes } = this.props
      if (favRecipes.length === 0) {
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
                  (favRecipes || []).map(recipe => (

                        <Card key={recipe.id} >
                           <CardImg top style={{ width: "40%" }} src={recipe.image} alt={recipe.title} />
                           <CardTitle tag="h3">{recipe.title}</CardTitle>
                           <Button outline color="success" size="small" >
                              <Link to={`/recipes/${recipe.id}/information`}>View Recipe</Link>
                           </Button>
                        </Card>
                    
                  ))
               }
            </Row>
         </Container>
         
      )
   }
}

const mapState = state => {

   return {
      user: state.auth,
      favRecipes: state.auth.favoriteRecipes
   }
}

export default connect(mapState)(FavoriteRecipes)