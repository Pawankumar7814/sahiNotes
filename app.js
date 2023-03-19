const express = require('express');
const app = express(); // Calling express as function return an application

const port = 8000; // Assign a port number to the application

// To run this application on the serve
app.listen(port, function(err) {
    if (err) { console.log(`Error while starting the server ${err}`); return; }
    console.log(`Server is running on ${port}`);
});