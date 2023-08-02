// Fetch data from the API
function fetchData() {
    const apiKey = '0f9d512106c2dbe231e41f17e392bdaa'; // Replace with your API key
    const city = 'Ulaanbaatar'; // Replace with the city you want to get the weather for
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
}
// Display data on the webpage
function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    if (data.main && data.main.temp) {
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius and round to 2 decimal places
        dataContainer.innerHTML = `<p>${Math.floor(temperature)}&#8451;</p>`;
    } else {
        dataContainer.innerHTML = '<p>Temperature data not available.</p>';
    }
}
window.addEventListener('load', fetchData);
