// Main file

// All require Modules
const express = require('express');
const app = express(); // Calling express as function return an application
const port = 8000; // Assign a port number to the application

app.set('view engine', 'ejs'); // Setting up the view engine
app.set('views', "./views"); // To access the web page
app.use("/", require("./routes/index.js")); // Each api should go to this route


// To run this application on the serve
app.listen(port, function(err) {
    if (err) { console.log(`Error while starting the server ${err}`); return; }
    console.log(`Server is running on ${port}`);
});