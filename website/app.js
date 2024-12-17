/* Global Variables */
const apiKey = "b9d511bcde0c06772874db93ce638d21";
let zip = document.getElementById('zip');
let feelings = document.getElementById('feelings');
let button = document.getElementById('generate');
let entryHolder = document.getElementById("entryHolder");
let dates = document.getElementById('date');
console.log(dates);
let temp = document.getElementById('temp');
let content = document.getElementById('content');
const getData = async(url = "" , data ={})=>{
    console.log("posting data" , data);
    const response = await fetch(url , {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) , });
    try{
        const newData = await response.json();
        console.log("received data", newData);
        return newData;
    }
    catch(error){
        console.error('Error:', error);
    }
};
/* Function to GET Web API Data*/
function getWeather(zipCode , feelings) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
            console.log(data);
            document.getElementById('city').innerHTML = `City: ${data.name}`;
            document.getElementById('temp').innerHTML = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
            document.getElementById('content').innerHTML = `content: ${data.weather[0].description}
            feelings : ${feelings}
            `;
        })
       .catch(error => {
            console.error('Error:', error);
        });
}
button.addEventListener('click',(e)=>{
    e.preventDefault();
    let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
dates.innerHTML =  `Date :  ${newDate}`;
    getWeather(zip.value , feelings.value );
    const entry = {
        date: newDate,
        temp: document.getElementById('temp').innerText.split(': ')[1],
        content: feelings.value,
    };
    getData('/add', entry);
    feelings.value = '';

})
// Create a new date instance dynamically with JS

