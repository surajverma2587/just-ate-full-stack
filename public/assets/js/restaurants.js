const renderCards = (restaurants) => {
  const constructRestaurantCard = ({ logo, name, type }) => {
    const restaurantCard = `<div class="card m-4" style="width: 18rem">
        <img src="${logo}" class="card-img-top" alt="${name}" />
        <div class="card-body text-center">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${type}</p>
          <a href="#" class="btn btn-primary">View</a>
        </div>
      </div>`;

    $("#restaurants-container").append(restaurantCard);
  };

  restaurants.forEach(constructRestaurantCard);
};

const onReady = () => {
  // fetchData
  const restaurants = [
    {
      id: 111,
      logo: "https://loremflickr.com/500/500/restaurant",
      name: "SQ Dragon 1",
      type: "Japanese",
    },
    {
      id: 222,
      logo: "https://loremflickr.com/500/500/restaurant",
      name: "SQ Dragon 2",
      type: "Japanese",
    },
    {
      id: 333,
      logo: "https://loremflickr.com/500/500/restaurant",
      name: "SQ Dragon 3",
      type: "Japanese",
    },
    {
      id: 444,
      logo: "https://loremflickr.com/500/500/restaurant",
      name: "SQ Dragon 4",
      type: "Japanese",
    },
  ];

  renderCards(restaurants);
};

$(document).ready(onReady);
