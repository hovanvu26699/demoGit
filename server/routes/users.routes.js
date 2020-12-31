const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')

const users = [
    { 'username': 'vu', 'password': '123' },
    { 'username': 'abc', 'password': '123' },
]


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// get user page
router.get('/login', (req, res, next) => {
    res.render('user')
});

router.get('/users', (req, res, next) => {
    res.send("<p style='font-size: 30px;'>Welcome!</p>")
});

// post
router.post('/login', (req, res, next) => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === req.body.username && users[i].password === req.body.password) {
            return res.redirect('/users')
        }
    }
    res.send("<p style='font-size: 30px;'>username and password incorrect</p>")
});










module.exports = router