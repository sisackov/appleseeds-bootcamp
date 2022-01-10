const request = require('postman-request');
const geocode = require('./utils/geocode');

// const url =
//     'http://api.weatherstack.com/current?access_key=57544947ac948939da9e83f838c8dfd6&query=Jerusalem';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//         console.error(response.body.error.info);
//     } else {
//         const data = JSON.parse(response.body);
//         // console.log(data.current);
//         console.log(
//             `It is currently ${data.current.temperature}${String.fromCharCode(
//                 176
//             )} degrees out. There is a ${data.current.precip}% chance of rain.`
//         );
//     }
// });

// const geocodeURL =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/Beer%20Sheba.json?access_token=pk.eyJ1IjoiY2ZzZHZzZCIsImEiOiJja3k4cjhlczUxaHlkMnhvajRtMTFxcTQ5In0.cPp1Fl6CEptNTTgLjIhbjw&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.');
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(latitude, longitude);
//     }
// });

geocode('Beer Sheba', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
