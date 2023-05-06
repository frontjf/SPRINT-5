var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var apiWeather = 'd9404fcb85c23fe23b2192459e8dc695'; // mi API del tiempo, prohibido copiarla u os la vereis conmigo....
if (navigator.geolocation) { // obtenemos la posicion
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log("Latitud:", lat);
        console.log("Longitud:", lon);
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(apiWeather); // url de la api con latitud ${lat}, longitud ${lon} y la api key pasadas por variables
        var ciudad = document.querySelector('#localidad');
        var clima = document.querySelector('#clima');
        var temp = document.querySelector('#temp');
        fetch(apiUrl) // realiza la solicitud a la API de OpenWeatherMap
            .then(function (response) { return response.json(); })
            .then(function (data) {
            // procesa los datos de la respuesta
            console.log(data.name);
            var tempCelsius = data.main.temp - 273.15; // convertimos grados kelvin a celsius
            tempCelsius = tempCelsius.toFixed(2);
            var descripcionTiempo = data.weather[0].description; // data.weather[0].description son datos que pasa la api, info del tiempo y descripcion de la misma
            ciudad.innerHTML = data.name;
            temp.innerHTML = tempCelsius;
            clima.innerHTML = descripcionTiempo;
        })
            .catch(function (error) {
            console.error("Error al obtener los datos meteorológicos:", error);
        });
    }, function (error) {
        console.error("Error al obtener la ubicación:", error);
    });
}
else {
    console.error("Geolocalización no es compatible en este navegador");
}
// https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lon&appid=apiWeather
var apiJoke = 'https://icanhazdadjoke.com/';
var apiJokeChuck = "https://api.chucknorris.io/jokes/random";
var apis = [apiJoke, apiJokeChuck];
var votar = document.querySelector('.votaciones');
var result = document.querySelector('#chiste');
function tellJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var randomApiIndex, response, data, badJoke, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    randomApiIndex = Math.floor(Math.random() * apis.length);
                    return [4 /*yield*/, fetch(apis[randomApiIndex], {
                            headers: { Accept: 'application/json', }, // especificar el encabezado para recibir una respuesta en formato JSON  
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    badJoke = void 0;
                    if (randomApiIndex === 0) {
                        badJoke = data.joke; // el chiste proviene de la primera API
                    }
                    else {
                        badJoke = data.value; // el chiste proviene de la segunda API
                    }
                    console.log(badJoke); // muestra chiste en consola
                    result.innerHTML = badJoke; // muestra el chiste en el id chiste de html que se ha guardado en la variable result
                    votar.innerHTML = "<button class=\"boton-valoracion btn btn-success col-2 m-3\" onclick=\"valorarChiste(1)\">Malo</button>\n        <button class=\"boton-valoracion btn btn-success col-2 m-3\" onclick=\"valorarChiste(2)\">Muy Malo</button>\n        <button class=\"boton-valoracion btn btn-success col-2 m-3\" onclick=\"valorarChiste(3)\">Malisimo</button>";
                    return [3 /*break*/, 4];
                case 3:
                    console.error('Error al obtener el chiste'); // si la respuesta no tiene exito muestra el mensaje de error
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
var reportAcudits = [];
function valorarChiste(score) {
    var _a;
    var lastJoke = (_a = document.querySelector('#chiste')) === null || _a === void 0 ? void 0 : _a.outerHTML; // outerHTML coje lo que hay en el campo chiste, o sea el chiste
    var joke = lastJoke || ""; // si joke tiene un valor valido lo cogera, OR (||), si no es valido (null, undefined...) cogera una cadena vacia
    var currentDate = new Date();
    var date = currentDate.toISOString();
    var lastAcudits = {
        joke: joke,
        score: score,
        date: date,
    };
    reportAcudits.push(lastAcudits); // creamos el array con los parametros recogidos en lastAcudits desde el constructor Acudits
    console.log(reportAcudits);
}
