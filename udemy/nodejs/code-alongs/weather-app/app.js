const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address');
} else {
    geocode(address, (geoError, { latitude, longitude, location }) => {
        if (geoError) {
            return console.log(geoError);
        }
        // console.log(location);
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(location);
            console.log(forecastData);
        });
    });
}

// geocode('Beer Sheba', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });
