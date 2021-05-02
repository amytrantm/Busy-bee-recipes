import React, { Component } from 'react'
import { Button, Container, Card, CardTitle, CardImg, CardText} from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

const Recipe = (props) => {
   //console.log('single recipe props,', props.recipe)
   const { label, image, cuisineType, totalTime } = props.recipe.recipe
   const { index } = props

   // const ViewRecipeButton = withRouter(({ history }) => (
   //    <Button type='button' onClick={ () => { history.push(`/recipes/${index}`)}}>
   //       View Recipe
   //    </Button>
   // ))

   return (
      <Container >
         <Card>
            <CardImg top style={{width: "40%"}} src={image} alt={label}/>
            <CardTitle tag="h3">{label}</CardTitle>
            <CardText>Cuisine Type: {cuisineType}</CardText>
            <CardText>Total Time: {totalTime}</CardText>
            {/* <ViewRecipeButton/> */}
            <Button>
               <Link to={{ 
                  pathname: `/recipes/${index}`,
                  state: {recipe: label }
               }}>View Recipe</Link>
            </Button>
         </Card>
      </Container>
   )
}

export default Recipe