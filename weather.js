class Weather {
   constructor(city, state, lang) {
      this.apiKey = 'b1d437e557b5af99';
      this.city = city;
      this.state = state;
      this.lang = lang;
   }
   
   async getWeather() {
      const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/lang:${this.lang}/q/${this.state}/${this.city}.json`);
      const responceData = await response.json();
      return responceData.current_observation;
   }

   setLang(lang) {
      this.lang = lang
   }
   
   changeLocation(city, state) {
      this.city = city;
      this.state = state;
   }
}