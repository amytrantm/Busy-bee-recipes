import React, { Component } from 'react'
import { Container, Button, Card, CardTitle, CardImg, CardBody} from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

const Recipe = (props) => {
   const { title, image, id } = props.recipe

   // const ViewRecipeButton = withRouter(({ history }) => (
   //    <Button type='button' onClick={() => { history.push(`/recipes/${id}/information`)}}>
   //       View Recipe
   //    </Button>
   // ))

   return (
      <div style={{ padding: "18px" }}>
         <Card>
            <div className='recipe-card'>
               <CardImg top style={{ width: "100%" }} src={image} alt={title} />
               <CardBody>
                  <CardTitle tag="h3">{title}</CardTitle>
                  <Button outline color="success" size="small">
                     <Link to={`/recipes/${id}/information`}>View Recipe</Link>
                  </Button>
               </CardBody>    
               {/* <ViewRecipeButton/> */}
            </div>
         </Card>
      </div>
         
   )
}

export default Recipe