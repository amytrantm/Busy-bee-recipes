import React, { Component } from 'react'
import { Button, Container, Card, CardTitle, CardImg, CardText} from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

const Recipe = (props) => {
   const { title, image, id } = props.recipe
   console.log('recipe', props)
  
   // const ViewRecipeButton = withRouter(({ history }) => (
   //    <Button type='button' onClick={ () => { history.push(`/recipes/${id}`)}}>
   //       View Recipe
   //    </Button>
   // ))

   return (
      <Container >
         <Card>
            <CardImg top style={{width: "40%"}} src={image} alt={title}/>
            <CardTitle tag="h3">{title}</CardTitle>
            {/* <CardText>Cuisine Type: {cuisineType}</CardText>
            <CardText>Total Time: {totalTime}</CardText> */}
            {/* <ViewRecipeButton/> */}
            {/* <Button>
               <Link to={{ 
                  pathname: `/recipes/${id}`,
                  state: {recipe: title }
               }}>View Recipe</Link>
            </Button> */}
            <Button>
               <Link to={ `/recipes/${id}/information`}>View Recipe</Link>
            </Button>
         </Card>
      </Container>
   )
}

export default Recipe