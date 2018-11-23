class Storage {
   constructor() {
      this.city;
      this.state;
      this.scale;
      this.lang;
      this.defaultCity = 'Warszawa';
      this.defaultState = 'PL';
      this.defaultScale = 'C';
      this.defaultLang = 'PL';
   }

   getData() {
      if(localStorage.getItem('city') === null) {
         this.city = this.defaultCity;
      } else {
         this.city = localStorage.getItem('city');
      }

      if(localStorage.getItem('state') === null) {
         this.state = this.defaultState;
      } else {
         this.state = localStorage.getItem('state');
      }

      if(localStorage.getItem('lang') === null) {
         this.lang = this.defaultLang;
      } else {
         this.lang = localStorage.getItem('lang');
      }

      if(localStorage.getItem('scale') === null) {
         this.scale = this.defaultScale;
      } else {
         this.scale = localStorage.getItem('scale');
      }

      return {
         city: this.city,
         state: this.state,
         scale: this.scale,
         lang: this.lang
      }
   }

   

   setLocationData(city, state) {
      localStorage.setItem('city', city);
      localStorage.setItem('state', state);
   }

   setScale(scale) {
      localStorage.setItem('scale', scale);
   }

   setLang(lang) {
      localStorage.setItem('lang', lang);
   }
}