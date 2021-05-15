const BASE_URL = "http://localhost:3000";

const renderCards = (restaurants) => {
  const constructRestaurantCard = ({ id, logo, name, type }) => {
    const restaurantCard = `<div class="card m-4" style="width: 18rem">
        <img src="${logo}" class="card-img-top" alt="${name}" />
        <div class="card-body text-center">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${type}</p>
          <a href="/restaurants/${id}" class="btn btn-primary">View</a>
        </div>
      </div>`;

    $("#restaurants-container").append(restaurantCard);
  };

  restaurants.forEach(constructRestaurantCard);
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error;
  }
};

const onReady = async () => {
  const restaurants = await fetchData(`${BASE_URL}/api/restaurants`);

  renderCards(restaurants);
};

$(document).ready(onReady);
