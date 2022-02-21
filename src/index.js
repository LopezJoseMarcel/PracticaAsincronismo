const fetchData = require("./utils/fetch");
const API = "https://rickandmortyapi.com/api/character/";

var label1;
var name1;



const asyncFunction = async(url_api) => {
  try {
      const data = await fetchData(url_api);
      const character = await fetchData(`${API}${data.results[0].id}`);
      const location = await fetchData(character.location.url);

      //PRINTERS

      console.log(data.info.count) ;
      console.log(character.name);
      console.log(character.status);
      console.log(character.species);
      console.log(character.gender);
      console.log(location.name);
      console.log(`URL: ${character.image}`);
     
     return character.name;

  } catch (error) {
      console.error(error);
  }
}

asyncFunction(API);


function cargadoDatos(){
  asyncFunction(API);

 

}

