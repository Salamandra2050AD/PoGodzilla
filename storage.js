class Storage {
   constructor() {
      this.city;
      this.state;
      this.scale;
      this.lang;
      this.lat;
      this.lon;
      this.defaultLang = 'PL';
   }

   getDefaultScale() {
      const fahrenheitScaleCounties = ['BS', 'BZ', 'US', 'PW', 'KY', 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY', 'UM']
      if (fahrenheitScaleCounties.some(v => v === this.state)) {
         return 'F';
      } else {
         return 'C';
      }
   }


   getData() {
      this.city = localStorage.getItem('city');
      this.state = localStorage.getItem('state');
      
      if (localStorage.getItem('lang') === null) {
         this.lang = this.defaultLang;
      } else {
         this.lang = localStorage.getItem('lang');
      }

      if (localStorage.getItem('scale') === null) {
         this.scale = this.getDefaultScale();
      } else {
         this.scale = localStorage.getItem('scale');
      }

      return {
         city: this.city,
         state: this.state,
         scale: this.scale,
         lang: this.lang,
         lat: this.lat,
         lon: this.lon
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