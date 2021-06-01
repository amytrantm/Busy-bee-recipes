import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  CardDeck,
} from 'reactstrap';
import Recipe from './Recipe';
import { API_KEY } from '../../secrets/api_key';
import axios from 'axios';
const RECIPES_API_URL = 'https://api.spoonacular.com/recipes/complexSearch';
//https://api.spoonacular.com/food/search

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  componentDidMount = async () => {
    const search = window.location.search; // "?q=chicken"
    const query = search.substring(3); // "chicken"
    const URL = `${RECIPES_API_URL}?apiKey=${API_KEY}&query=${query}&number=12&instructionsRequired&maxReadyTime=45`;

    const response = await axios.get(URL);
    const searchResults = response.data.results;

    this.setState({
      recipes: searchResults,
    });
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.location !== prevProps.location) {
      await this.onRouteChanged();
    }
  };

  onRouteChanged = async () => {
    const search = window.location.search;
    const query = search.substring(3);
    const URL = `${RECIPES_API_URL}?apiKey=${API_KEY}&query=${query}&number=12&instructionsRequired&maxReadyTime=45`;

    const response = await axios.get(URL);
    const searchResults = response.data.results;

    this.setState({
      recipes: searchResults,
    });
  };

  render() {
    return (
      <div className="home">
        <Row>
          <Col>
            <h4> Try these recipes today: </h4>
          </Col>
        </Row>
        <Row>
          <CardDeck>
            {(this.state.recipes || []).map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </CardDeck>
        </Row>
      </div>
    );
  }
}

export default SearchResults;
