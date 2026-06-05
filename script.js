const apiKljuc = '56b434da2d3006d1a4981f1c64f361fd'; // OVDJE STAVI SVOJ KLJUČ

async function dohvatiPrognozu() {
    const grad = document.getElementById('grad').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${grad}&appid=${apiKljuc}&units=metric&lang=hr`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('city').innerText = "Grad: " + data.name;
            document.getElementById('temp').innerText = Math.round(data.main.temp) + "°C";
            document.getElementById('desc').innerText = "Vrijeme: " + data.weather[0].description;
            document.getElementById('humidity').innerText = data.main.humidity + "%";
            document.getElementById('wind').innerText = data.wind.speed + " km/h";
            document.getElementById('pressure').innerText = data.main.pressure + " hPa";
        }
    } catch (e) {
        alert("Došlo je do greške!");
    }
}