class Storage {
   constructor() {
      this.city;
      this.state;
      this.scale;
      this.lang;
      this.currentCity;
      this.defaultCity = 'Warszawa';
      this.defaultState = 'PL';
      this.defaultLang = 'PL';
   }

   getDefaultScale() {
      const fahrenheitScaleCounties = ['BS', 'BZ', 'US', 'PW', 'KY', 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY', 'UM']
      if (fahrenheitScaleCounties.some(v => this.state === v)) {
        return 'F';
      } else {
        return 'C';
      }
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
         this.scale = this.getDefaultScale();
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