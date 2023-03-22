const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

async function getBikesByBrand() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const brandName = urlParams.get("name");

  const bikes = [];
  const response = await fetch(
    `http://localhost:3000/bycicles/brand/${brandName}`,
    options
  );
  const data = await response.json();
  data.forEach((bike) => {
    bikes.push(bike);
  });
  return bikes;
}

export default getBikesByBrand;
