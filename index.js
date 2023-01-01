/**-----------------IMPORTS--------------------------- */
const express = require("express");
const app = express();
const path = require("path");
const routeUsers = require("./routes/users.js");
const fs = require("fs")
const PORT = process.env.PORT || 3000;

/** --------------- MIDDLEWARES --------------------- */
// Use built-in middleware for json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//set route
app.use('/users', routeUsers);

//Path to static files
app.use(express.static(path.join(__dirname, '/public')));

/** ------------------ SET ENGINE --------------------- */
app.set("view engine", "ejs");

//Request to homepage
app.get('/', (req, res) => {
    console.log(`${req.method} ${req.url}`)
    res.render('index.ejs');
});

app.use('/*', (req, res) => {
    console.log(`${req.method} ${req.url}`)
    res.render('404.ejs');
})
app.listen(PORT, () => console.log(`Server iko poa inarun port ${PORT}`));