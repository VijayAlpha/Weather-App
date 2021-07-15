export default class weeklyReport{
    
    constructor(lat , lon){
        this.lat = lat;
        this.lon = lon;
    }
    
    async getResult() {
        const key = '1f024f044ae5695270b2301907209383';
        
        try {
            const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&%20exclude=daily&appid=${key}&units=metric`);
            
            const data = await result.json();
            
            this.result = data;

            console.log(data);
        } catch (error) {
            console.log(error);
        }  
    }
};