const express = require('express');
const UserService = require('../service/user-service');
const route = express.Router();

route.post('/login', (req, res) => {
    let bodyData = req.body;
    UserService.login(bodyData).then(result => {
        res.status(result.status).send({ message: result.message, data: result.data });
    }).catch(error => {
        res.status(error.status).send({ status: error.status, message: error.message })
    })

})

module.exports = route;