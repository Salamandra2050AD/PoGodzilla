class UI {
  constructor(scale, lang) {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    this.changeLocation = document.getElementById('ui-change-loc');
    this.chooseLocation = document.getElementById('locModalLabel')
    this.changeScale = document.getElementById('ui-change-scale');
    this.chooseScale = document.getElementById('degModalLabel');
    this.celsius = document.getElementById('ui-celsius');
    this.fahrenheit = document.getElementById('ui-fahrenheit');
    this.bothScales = document.getElementById('ui-both-scales');
    this.city = document.getElementById('ui-city');
    this.state = document.getElementById('ui-state');
    this.close = document.querySelectorAll('.ui-close');
    this.save = document.querySelectorAll('.ui-save');
    this.chooseLang = document.getElementById('langModalLabel');
    this.changeLang = document.getElementById('ui-change-lang');
    this.PL = document.getElementById('ui-polish');
    this.EN = document.getElementById('ui-english');
    this.scale = scale;
    this.lang = lang;
    this.message = '';
  }

  paint(weather) {
    this.language(this.lang)
    .then(data => {
      this.changeLocation.innerText = data.changeLocation;
      this.chooseLocation.innerText = data.chooseLocation;
      this.changeScale.innerText = data.changeScale;
      this.chooseScale.innerText = data.chooseScale;
      this.celsius.innerText = data.celsius;
      this.fahrenheit.innerText = data.fahrenheit;
      this.bothScales.innerText = data.bothScales;
      this.city.innerText = data.city;
      this.state.innerText = data.state;
      this.close.forEach(button => button.innerText = data.close);
      this.save.forEach(button => button.innerText = data.save);
      this.chooseLang.innerText = data.chooseLang;
      this.changeLang.innerText = data.changeLang;
      this.PL.innerText = data.PL;
      this.EN.innerText = data.EN;
      this.message = data.errorMessage;
      if(weather === undefined) {
        this.errorMessage();
      } else {
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `${data.relativeHumidity}${weather.relative_humidity}`;
        this.wind.textContent = `${data.wind}${weather.wind_dir}${data.windSpeed}${weather.wind_kph}km/h`;

        if (this.scale === 'F') {
          this.string.textContent = `${weather.temp_f}\u{00B0} F`;
          this.feelsLike.textContent = `${data.feelsLike}${weather.feelslike_f}\u{00B0} F`;
          this.dewpoint.textContent = `${data.dewpoint}${weather.dewpoint_f}\u{00B0} F`;
        } else if (this.scale === 'C') {
          this.string.textContent = `${weather.temp_c}\u{00B0} C`;
          this.feelsLike.textContent = `${data.feelsLike}${weather.feelslike_c}\u{00B0} C`;
          this.dewpoint.textContent = `${data.dewpoint}${weather.dewpoint_c}\u{00B0} C`;
        } else {
          this.string.textContent = weather.temperature_string;
          this.feelsLike.textContent = `${data.feelsLike}${weather.feelslike_string}`;
          this.dewpoint.textContent = `${data.dewpoint}${weather.dewpoint_string}`;
        }
      }
    });
  }
  
  async setScale(scale) {
    this.scale = scale;
  }

  async setLang(lang) {
    this.lang = lang;
  }

  async language() {
    const response = await fetch(`languages/${this.lang}.json`);
    const responseData = await response.json();
    return responseData;
  }

  errorMessage() {
    this.clearAlert();
    const div  =  document.createElement('div');
    div.className = 'alert alert-danger';
    div.appendChild(document.createTextNode(`${this.message}`));
    const container =  document.getElementById('loc-modal-body');
    const form = document.getElementById('w-form');
    container.insertBefore(div, form);
    document.getElementById('ui-change-loc').click();

    setTimeout(() => {
      this.clearAlert();
    }, 4500);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
}