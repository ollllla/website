// JavaScript File

function getWeatherByCity( fnOK, fnError, cityName) {
   
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + cityName + '&APPID=dd1b5adf11309defd12e273e2d0732a2&cnt=7&units=metric' + '&lang=ua&callback=?',
        function (data) {
            fnOK.call(this, data);
        }
    );
}