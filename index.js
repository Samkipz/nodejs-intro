
//You can load an ES module by setting "type": "module" in the package.json
//This will enable you to use "import express from express"
import express from "express";
import bodyParser from 'body-parser';
import {v4 as uuid} from "uuid";
import routeUsers from "./routes/users.js";



// create app and listen on port 3000
const app = express();
app.listen(3000, () =>{
    console.log("Server iko poa inarun port 3000");
})


//set route
app.use('/users', routeUsers);

//Request to homepage
app.get('/', (req, res)=>{
    console.log("request handshake okay!");
    res.send("Request received");
});