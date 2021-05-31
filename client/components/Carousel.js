import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
   {
      src: 'https://spoonacular.com/recipeImages/638125-556x370.jpg',
      altText: 'Chicken In A Pot',
      caption: 'Chicken In A Pot'
   },
   {
      src: 'https://spoonacular.com/recipeImages/655698-556x370.jpg',
      altText: 'Pepperoni Pizza Muffins',
      caption: 'Pepperoni Pizza Muffins'
   },
   {
      src: 'https://spoonacular.com/recipeImages/656791-556x370.jpg',
      altText: 'Pork Menudo',
      caption: 'Pork Menudo'
   }
];

const Carousel = () => <UncontrolledCarousel items={items} />
    

export default Carousel