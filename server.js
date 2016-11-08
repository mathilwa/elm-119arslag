const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// const firebase = require('firebase/app');
// require("firebase/auth");
// require("firebase/database");
//
// const config = {
//     apiKey: 'AIzaSyCLgXbEpruQMMzii1MxAmvkTrDMEYCHo2E',
//     authDomain: 'torunnogtrond.firebaseapp.com',
//     databaseURL: 'https://torunnogtrond.firebaseio.com',
//     storageBucket: '',
//     messagingSenderId: '589846987031',
// };
//
// firebase.initializeApp(config);

// serve static assets normally
app.use(express.static(__dirname + '/src/public/dist'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'src/public/dist', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);