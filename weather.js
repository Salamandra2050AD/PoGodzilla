class Weather {
   constructor(city, state, lang, lat, lon) {
      this.apiKey = 'b1d437e557b5af99';
      this.city = city;
      this.state = state;
      this.lang = lang;
      this.lat = lat;
      this.lon = lon;
   }
   
   async getWeather() {
      const link = await this.generateLink()
      const response = await fetch(link);
      const responseData = await response.json();
      return responseData.current_observation;
   }

   async generateLink(){
      if(this.city || this.state === null){
         const position = await this.getCoordinates();
         this.lat = position.coords.latitude;
         this.lon = position.coords.longitude;
         return `http://api.wunderground.com/api/${this.apiKey}/conditions/lang:${this.lang}/q/${this.lat+','+this.lon}.json`
      }else {
         return `http://api.wunderground.com/api/${this.apiKey}/conditions/lang:${this.lang}/q/${this.state+'/'+this.city}.json`
      }
   }

   getCoordinates() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, {timeout:10000});
      });
    }


   setLang(lang) {
      this.lang = lang
   }
   
   changeLocation(city, state) {
      this.city = city;
      this.state = state;
   }
}