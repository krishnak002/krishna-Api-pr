let cityElement = document.querySelector('#city');

let temp = document.getElementById("temp");
let description = document.getElementById("description");

const apiKey = 'd3793676d56f0cbc3e10bcab18f5d74c';

const handleDisplay = async () => {

    let city = document.getElementById("searchCity").value;

    const api = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`;

    try {
        let res = await fetch(api);
        let data = await res.json();
        console.log(data);

    if (data.cod === "404") {
        alert("City not found");
    }
        cityElement.textContent ="City :" + data.name;
        temp.textContent ="Temperature: " + data.main.temp + "°C";
        description.textContent = "Description: " + data.weather[0].description;

    } catch (error) {
        console.log(error);
    }

}