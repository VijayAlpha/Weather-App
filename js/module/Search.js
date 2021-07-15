export default class CurrentLocation {
  constructor(place, lat, long) {
    this.place = place;
    this.lat = lat;
    this.long = long;
  }

  async getresult() {
    const key = '1f024f044ae5695270b2301907209383';
    let result;

    try {
      if (this.lat && this.long) {
        result = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${key}&units=metric`
        );
      } else {
        result = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.place}&appid=${key}&units=metric`
        );
      }

      const data = await result.json();
      this.result = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
