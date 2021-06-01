import React, { Component } from 'react'
import {  Button, Card, CardTitle, CardImg, CardBody} from 'reactstrap'
import { Link, } from 'react-router-dom'

const Recipe = (props) => {
   const { title, image, id } = props.recipe

   // const ViewRecipeButton = withRouter(({ history }) => (
   //    <Button type='button' onClick={() => { history.push(`/recipes/${id}/information`)}}>
   //       View Recipe
   //    </Button>
   // ))

   return (
      <div className='card-item' >
         <Card className="text-center">
            <CardImg top width="100%" src={image} alt={title} />
            <CardBody>
               <CardTitle tag="h5">{title}</CardTitle>
               <Button outline color="success" size="small">
                  <Link to={`/recipes/${id}/information`}>View Recipe</Link>
               </Button>
            </CardBody>    
            {/* <ViewRecipeButton/> */}
         </Card>
      </div>
   )
}

export default Recipe