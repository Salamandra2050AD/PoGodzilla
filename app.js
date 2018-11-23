const storage = new Storage();
const storeData = storage.getData();
const weather = new Weather(storeData.city, storeData.state, storeData.lang);
const ui = new UI(storeData.scale, storeData.lang);
let data;

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-deg-btn').addEventListener('click', setScale)
document.getElementById('w-change-lang-btn').addEventListener('click', setLang)
document.getElementById('w-change-loc-btn').addEventListener('click', setLocation)

function getWeather(){
  weather.getWeather()
  .then(results => {
    data = results;
    ui.paint(results);
    console.log(results);
  })
  .catch(err => {
    console.log(err);
  })
}

function setScale() {
  const scale = document.querySelector('input[name="scale"]:checked').value;
  console.log(scale);
  ui.setScale(scale)
  .then(ui.paint(data));
  storage.setScale(scale);
}

function setLang() {
  const select = document.getElementById("lang-select");
  const lang = select.options[select.selectedIndex].value;
  console.log("language: " + lang);
  storage.setLang(lang);
  ui.setLang(lang)
  .then(weather.setLang(lang))
  .then(getWeather());
}

function setLocation(){
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city, state);
  console.log(city + ", " + state);
  weather.getWeather()
  .then(results => {
    data = results;
    ui.paint(results);
    console.log(results);
    if(results !== undefined) {
      storage.setLocationData(city, state);
    }
  })
  .catch(err => console.log(err))
}