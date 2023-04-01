/* 
  Este modulo es el encargado de conectarse a la base de datos de MongoDB 
  y de exportar las funciones que se utilizarán para obtener los datos de la base de datos.

  Esos datos unicamente hacen referencia a la informacion de las bicicletas filtradas por marca.

  La marca por la cual se filtra se obtiene de la URL por el parametro de name=nombreDeLaMarca.
*/

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
    `http://localhost:3000/bycicles/brand/${brandName}`, // <-- Este puerto es donde se ejecuta sirve la API.
    options
  );
  const data = await response.json();
  data.forEach((bike) => {
    bikes.push(bike);
  });
  return bikes;
}

export default getBikesByBrand;
