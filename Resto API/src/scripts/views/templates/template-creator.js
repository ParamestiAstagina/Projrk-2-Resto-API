import CONFIG from '../../globals/config';


const createRestaurantItemTemplate = (restaurant) => `
<div class="containerResto">
  <div class="card" data-id="${restaurant.id}"> 
    <img class="fan-art-resto" src="${CONFIG.IMAGE_MEDIUM.replace('<pictureId>', restaurant.pictureId)}" alt="${restaurant.name}">
    <div class="resto-info">
      <div class="resto-info__title">
        <h2>${restaurant.name}</h2>
      </div>
      <div class="resto-info__city">
        <p>${restaurant.city}</p>
      </div>
      <div class="resto-info__description">
        <p>${restaurant.description}</p>
      </div>
      <div class="resto-info__rating">
        <p>${restaurant.rating}</p>
      </div>
    </div>
  </div>
</div>
`;



const createRestaurantDetailTemplate = (restaurant) => `

  <h2 class="resto__name">${restaurant.name}</h2>
  <img class="resto__image" src="${CONFIG.IMAGE_MEDIUM.replace('<pictureId>', restaurant.pictureId)}" alt="${restaurant.name}" />
  
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>

  <div class="resto__menu">
    <h3>Menu</h3>
    <h4>Food Menu</h4>
    <ul>
      ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
    </ul>
    <h4>Drink Menu</h4>
    <ul>
      ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>

  <div class="resto__reviews">
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews.map(review => `
      <div class="review">
        <h4>${review.name}</h4>
        <p>${review.review}</p>
      </div>
    `).join('')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate};
