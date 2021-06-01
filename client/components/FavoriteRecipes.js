import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardDeck,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FavoriteRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user || null,
    };
  }

  render() {
    const { favRecipes } = this.props;
    if (favRecipes.length === 0) {
      return <div>There are no favorites.</div>;
      // (<div>
      //    <p>There are no favorites. </p>
      //    <div>
      //    <Link to={`/`}> Please add new recipe</Link>
      //    </div>
      // </div>)
    }

    return (
      <div>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Favorite Recipes</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        <div className="home">
          <CardDeck>
            {(favRecipes || []).map((recipe) => (
              <div className="card-item" key={recipe.id}>
                <Card className="text-center">
                  <CardImg
                    top
                    width="100%"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <CardBody>
                    <CardTitle tag="h3">{recipe.title}</CardTitle>
                    <Button outline color="success" size="small">
                      <Link to={`/recipes/${recipe.id}/information`}>
                        View Recipe
                      </Link>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </CardDeck>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
    favRecipes: state.auth.favoriteRecipes,
  };
};

export default connect(mapState)(FavoriteRecipes);
