import React, { Component } from 'react'
import { Button, Container, Card, CardTitle, CardImg, CardText} from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

const Recipe = (props) => {
   const { title, image, id } = props.recipe

   return (
      <Card>
         <div className='recipe-card'>
            <CardImg top style={{ width: "40%" }} src={image} alt={title} />
            <CardTitle tag="h3">{title}</CardTitle>
            <Button outline color="success" size="small">
               <Link to={`/recipes/${id}/information`}>View Recipe</Link>
            </Button>
         </div>
      
         <p>💟 </p>
      </Card>
         
   )
}

export default Recipe