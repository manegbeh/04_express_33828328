const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get('/contact', (req,res) => res.send('<h1>Get in Touch</h1>'))

// Date route - shows today's date using JavaScript's Date object
router.get('/date', (req,res) => {
    // Get today's date in a readable string format
    const today = new Date().toDateString();
    // Send the formatted date as an HTML response
    res.send(`<h1>Today's Date: ${today}</h1>`);
})

// Welcome route - displays a personalized welcome message using the name from the URL
router.get('/welcome/:name', (req, res) => {
    // Get the name parameter from the URL
    const name = req.params.name;
    // Send a personalized welcome message
    res.send(`<h1>Welcome, ${name}!</h1>`);
})

// Chain route - demonstrates two chained route handlers
router.get('/chain', 
    (req, res, next) => {
        // First handler -logs a message and passes control to the next function
        console.log("First handler executed");
        next();
    },
    (req, res) => {
        // Second handler - sends the final response
        res.send('<h1>Chained Route Example - Both Handlers Executed</h1>');
    }
);

// Export the router object so index.js can access it
module.exports = router;
