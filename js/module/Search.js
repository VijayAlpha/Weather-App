export default class CurrentLocation {

    constructor(place) {
        this.place = place;
    }


    

    async getresult() {
        
        const key = '1f024f044ae5695270b2301907209383';

        try {
            const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.place}&appid=${key}&units=metric`);
            
            const data = await result.json();
            
            this.result = data;

            console.log(data);
        } catch (error) {
            console.log(error);
        }  
    }
};
