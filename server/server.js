const express = require('express');
const dbConnect = require('./dbConnect/dbConnection');
const routes = require('./routes/route.js');
const App = express ();

App.use('/', routes)
App.get('/', (req, res) => {
    res.send("My Back end workds fine!!");
})

App.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
    dbConnect();
})