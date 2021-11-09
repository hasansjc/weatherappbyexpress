const subBtn = document.getElementById("submitBtn");
const cityname=document.getElementById("cityname")
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const d=new Date();
console.log(d.getDay);
console.log(d.getMonth);
day.innerHTML=`${(days[d.getDay()])} ${months[d.getMonth()]}`;

        time.innerHTML=`${(d.toLocaleTimeString())}`


const getInfo = async(event) =>{
        event.preventDefault();
        if(cityname.value===''){
                
                city.innerHTML="plz enter the city name"
        }
        else{
                try{
                        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=4f618218fb946f13627606b4649eef9d`);
                        const data= await response.json();
                        city.innerHTML=data.name;
                        temp_response.innerHTML=(data.main.temp-273).toFixed(2);
                }catch{
                        city.innerHTML="No such city exist"
                }
                
        }
}
subBtn.addEventListener('click',getInfo);