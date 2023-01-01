var users = require('../model/users.json');

const getAllUsers = (req, res) => {
    console.log(`${req.method} ${req.url}`)
    res.json(users);
}

const createNewUser = (req, res) => {
    const user = req.body
    if (!user.firstName || !user.lastName || !user.gender) {
        return res.status(400).send("Firstname, Lastname and gender are all Cumpolsory");
    }
    users.push({ id: users[users.length - 1].id + 1 || 1, ...user });

    res.json(users);
}

const updateUser = ((req, res) => {
    const user = users.find((user) => user.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).send(`User with the id ${req.body.id} does not exist`);
    }
    const { firstName, lastName, gender } = req.body
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (gender) user.gender = gender
    res.send(`User with the id ${req.body.id} has been updated successfully`);
})

const deleteUser = ((req, res) => {
    const user = users.find((user) => user.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).send(`User with the id ${req.body.id} does not exist`);
    }
    users = users.filter((user) => user.id != parseInt(req.body.id));
    res.send(`User with the id ${req.body.id} has been deleted from database`);
})

const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return res.status(400).send(`User with the id ${req.body.id} does not exist`);
    }
    const foundUser = users.find((user) => user.id == id);
    res.json(foundUser);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getUserById
}