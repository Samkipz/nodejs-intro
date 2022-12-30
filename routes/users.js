import express from "express";
const router = express.Router();
import bodyParser from 'body-parser';

// create application/json parser
const jsonParser = bodyParser.json()

const users = [
    {
        "firstName": "Samuel",
        "lastName": "Ndiema",
        "gender": "Male"
    },
    {
        "firstName": "Eve",
        "lastName": "Girl",
        "gender": "Female"
    }
]; //An array to store post requests since we don't have a database

//Get requests for all users
router.get('/', (req, res)=>{
    res.send(users);
});

//Post requests for all users
router.post('/', jsonParser, (req, res)=>{
    console.log("request handshake okay!");
    const user = req.body;
    users.push(user);
    res.send(`${user.firstName} has successfully been added to the database`);

});

export default router;