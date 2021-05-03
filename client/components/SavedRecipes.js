import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'

class SavedRecipes extends Component {
   
   render(){
      return(
         <Container>
            <Row>
               <Col>
                  <Breadcrumb>
                     <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                     <BreadcrumbItem active>Saved Recipes</BreadcrumbItem>
                  </Breadcrumb>
               </Col>
            </Row>

            <Row>
               
            </Row>
         </Container>
         
      )
   }
}

export default SavedRecipes