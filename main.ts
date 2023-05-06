
const apiWeather = 'd9404fcb85c23fe23b2192459e8dc695';                      // mi API del tiempo, prohibido copiarla u os la vereis conmigo....

if (navigator.geolocation) {                                              // obtenemos la posicion
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat:any = position.coords.latitude;
      const lon:any = position.coords.longitude;
      
      console.log("Latitud:", lat);
      console.log("Longitud:", lon);

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiWeather}`;   // url de la api con latitud ${lat}, longitud ${lon} y la api key pasadas por variables

const ciudad: any = document.querySelector('#localidad');
const clima: any = document.querySelector('#clima');
const temp: any = document.querySelector('#temp');


fetch(apiUrl)                                                             // realiza la solicitud a la API de OpenWeatherMap
  .then(response => response.json())
  .then(data => {
                                                                          // procesa los datos de la respuesta
    console.log(data.name);

    let tempCelsius: any = data.main.temp - 273.15;                       // convertimos grados kelvin a celsius
    tempCelsius = tempCelsius.toFixed(2);

  let descripcionTiempo = data.weather[0].description;                    // data.weather[0].description son datos que pasa la api, info del tiempo y descripcion de la misma
  
     
    ciudad.innerHTML = data.name;
    temp.innerHTML = tempCelsius;
    clima.innerHTML = descripcionTiempo;
    


  })
  .catch(error => {
    console.error("Error al obtener los datos meteorológicos:", error);
  });

    },
    (error) => {
      console.error("Error al obtener la ubicación:", error);
    }
  );
} else {
  console.error("Geolocalización no es compatible en este navegador");
}

// https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lon&appid=apiWeather










const apiJoke:string = 'https://icanhazdadjoke.com/'
const apiJokeChuck: string = "https://api.chucknorris.io/jokes/random";
const apis: string[] = [apiJoke, apiJokeChuck];
let votar:any = document.querySelector('.votaciones');
let result:any = document.querySelector('#chiste');
 
 async function tellJoke(): Promise<void> {     // async: se utiliza para definir una función asíncrona en JavaScript/TypeScript,
                                                // una función asíncrona permite el uso de la palabra clave await dentro de ella, lo que nos permite
                                                // esperar a que se resuelva una promesa antes de continuar con la ejecución del código.
                                                // Promise<void>: Esta parte indica que la función devuelve una promesa. Una promesa representa
                                                // un valor que puede estar disponible de forma inmediata o en el futuro. En este caso,
                                                // la promesa no devuelve ningún valor (void), ya que solo queremos obtener y mostrar un chiste
                                                // sin necesidad de devolver datos adicionales.
     try {                                                                // hace la peticion GET (metodo protocolo HTTP) a la API              
      const randomApiIndex = Math.floor(Math.random() * apis.length);     // variable random que se aplica a la siguiente variable 'reponse'para que saque chistes aleatorios de las 2 apis
        const response = await fetch(apis[randomApiIndex], {        // await sole se usa con la funcion async y espera que una promesa se cumpla'Promise<void>'
         headers: { Accept: 'application/json', },                         // especificar el encabezado para recibir una respuesta en formato JSON  

        });
       if (response.ok) {                                   // verificar si la respuesta tiene exito (código de estado 200)
         const data = await response.json();                // obtener los datos de la respuesta en formato JSON
         
         let badJoke: string;
        
         if (randomApiIndex === 0) {
          
          badJoke = data.joke;                            // el chiste proviene de la primera API
        } else {
          
          badJoke = data.value;                           // el chiste proviene de la segunda API
        }
        
        
        
        
        
         console.log(badJoke);                            // muestra chiste en consola
         
         result.innerHTML = badJoke;                      // muestra el chiste en el id chiste de html que se ha guardado en la variable result

        votar.innerHTML = `<button class="boton-valoracion btn btn-success col-2 m-3" onclick="valorarChiste(1)">Malo</button>
        <button class="boton-valoracion btn btn-success col-2 m-3" onclick="valorarChiste(2)">Muy Malo</button>
        <button class="boton-valoracion btn btn-success col-2 m-3" onclick="valorarChiste(3)">Malisimo</button>` 
        
         

       } else {
         console.error('Error al obtener el chiste');       // si la respuesta no tiene exito muestra el mensaje de error
       }
     } catch (error) {                                      // captura y muestra cualquier error que ocurra durante la solicitud
       console.error(error);
     }
     
   }

   interface Acudits {            // definimos los campos que luego se van a guardar
    joke: string;
    score?: number;               // el ? quiere decir que es un campo opcional, no es obligatorio ponerlo
    date?: string;
  }
  const reportAcudits: Acudits[] = [];

   function valorarChiste(score:number){                                  // score:number es el valor que le pasa la funcion desde html

 

  const lastJoke = document.querySelector('#chiste')?.outerHTML;          // outerHTML coje lo que hay en el campo chiste, o sea el chiste
  const joke = lastJoke || "";                                            // si joke tiene un valor valido lo cogera, OR (||), si no es valido (null, undefined...) cogera una cadena vacia
  const currentDate = new Date();
  const date = currentDate.toISOString();

  const lastAcudits: Acudits = {                          
    joke: joke,
    score: score,
    date: date,
}

reportAcudits.push(lastAcudits);                                        // creamos el array con los parametros recogidos en lastAcudits desde el constructor Acudits

console.log(reportAcudits);

}

  
     





















  










































  
  
  