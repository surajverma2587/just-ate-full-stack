const BASE_URL = "http://localhost:3000";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error;
  }
};

const onReady = async () => {
  const restaurant = await fetchData(
    `${BASE_URL}/api/restaurants/${window.location.pathname.split("/")[2]}`
  );

  const foods = restaurant.foods;

  const price = foods[0].getPrice();

  console.log(price);
};

$(document).ready(onReady);
