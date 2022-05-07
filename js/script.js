function initPage() {
    const cityEl = document.getElementById("enter-city"); // city input
    const searchEl = document.getElementById("search-button"); // search element
    const clearEl = document.getElementById("clear-history"); //id for clear history local storage for user, id ln 111
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    var todayweatherEl = document.getElementById("today-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
