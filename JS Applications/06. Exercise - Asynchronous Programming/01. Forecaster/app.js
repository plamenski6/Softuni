function attachEvents() {

    let locationInput = document.getElementById('location');
    let weatherButton = document.getElementById('submit');
    let forecastSect = document.getElementById('forecast');
    let currentCond = document.getElementById('current');
    let upcomingCond = document.getElementById('upcoming');
    let h1 = document.getElementsByTagName('h1')[0];

    weatherButton.addEventListener('click', (e) => {

        if (locationInput.value.length > 0) {

            const symbols = {
                's': '☀',
                'ps': '⛅',
                'o': '☁',
                'r': '☂',
                'd': '°'
            }

            fetch('https://judgetests.firebaseio.com/locations.json')
                .then(jsonMiddleware)
                .then(data => {
                    Object.entries(data).forEach(arr => {
                        let code = arr[1].code;
                        let name = arr[1].name;

                        if (name === locationInput.value) {
                            forecastSect.style.display = 'block';

                            fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
                                .then(jsonMiddleware)
                                .then(data => {
                                    let name = data.name;
                                    let condition = data.forecast.condition;
                                    let high = data.forecast.high;
                                    let low = data.forecast.low;
                                    //divForecast
                                    let divForecast = document.createElement('div');
                                    divForecast.className = 'forecasts';
                                    currentCond.appendChild(divForecast);
                                    //spanSymbol
                                    let spanSymbol = document.createElement('span');
                                    spanSymbol.className = 'condition'; spanSymbol.className = 'symbol';
                                    if (condition === 'Sunny') {
                                        spanSymbol.textContent = symbols.s;
                                    } else if (condition === "Partly sunny") {
                                        spanSymbol.textContent = symbols.ps;
                                    } else if (condition === "Overcast") {
                                        spanSymbol.textContent = symbols.o;
                                    } else if (condition === "Rain") {
                                        spanSymbol.textContent = symbols.r;
                                    }
                                    divForecast.appendChild(spanSymbol);
                                    //spanCondition
                                    let spanCondition = document.createElement('span');
                                    spanCondition.className = 'condition';
                                    divForecast.appendChild(spanCondition);
                                    //spanName
                                    let spanName = document.createElement('span');
                                    spanName.className = 'forecast-data';
                                    spanName.textContent = name;
                                    spanCondition.appendChild(spanName);
                                    //spanDegrees
                                    let spanDegrees = document.createElement('span');
                                    spanDegrees.className = 'forecast-data';
                                    spanDegrees.textContent = `${low}${symbols.d}/${high}${symbols.d}`;
                                    spanCondition.appendChild(spanDegrees);
                                    //spanWeather
                                    let spanWeather = document.createElement('span');
                                    spanWeather.className = 'forecast-data';
                                    spanWeather.textContent = condition;
                                    spanCondition.appendChild(spanWeather);
                                })
                                .catch(errorHandler)

                            fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
                                .then(jsonMiddleware)
                                .then(data => {

                                    //cityName
                                    let cityName = document.createElement('article');
                                    cityName.textContent = name;
                                    upcomingCond.appendChild(cityName);
                                    //divForecastInfo
                                    let divForecastInfo = document.createElement('div');
                                    divForecastInfo.className = "forecast-info";
                                    upcomingCond.appendChild(divForecastInfo);

                                    Object.entries(data.forecast).forEach(arr => {
                                        let condition = arr[1].condition;
                                        let high = arr[1].high;
                                        let low = arr[1].low;
                                        
                                        //spanUpcoming
                                        let spanUpcoming = document.createElement('span');
                                        spanUpcoming.className = 'upcoming';
                                        divForecastInfo.appendChild(spanUpcoming);
                                        //spanSymbol
                                        let spanSymbol = document.createElement('span');
                                        spanSymbol.className = 'symbol';
                                        if (condition === 'Sunny') {
                                            spanSymbol.textContent = symbols.s;
                                        } else if (condition === "Partly sunny") {
                                            spanSymbol.textContent = symbols.ps;
                                        } else if (condition === "Overcast") {
                                            spanSymbol.textContent = symbols.o;
                                        } else if (condition === "Rain") {
                                            spanSymbol.textContent = symbols.r;
                                        }
                                        spanUpcoming.appendChild(spanSymbol);
                                        //spanDegrees
                                        let spanDegrees = document.createElement('span');
                                        spanDegrees.className = 'forecast-data';
                                        spanDegrees.textContent = `${low}${symbols.d}/${high}${symbols.d}`;
                                        spanUpcoming.appendChild(spanDegrees);
                                        //spanWeather
                                        let spanWeather = document.createElement('span');
                                        spanWeather.className = 'forecast-data';
                                        spanWeather.textContent = condition;
                                        spanUpcoming.appendChild(spanWeather);
                                    })
                                })
                                .catch(errorHandler)
                        }
                    })
                })
                .catch(errorHandler)
        }
    });

    function errorHandler(e) {
        h1.textContent = e.message;
    }

    function jsonMiddleware(res) {
        if (res.status < 400) {
            return res.json();
        } else {
            throw res;
        }
    }

}

attachEvents();
