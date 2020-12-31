// REQUIRE
const express = require('express')
const usersRoute = require('./routes/users.routes')

// ASSIGN
const app = express()
const port = 3000

// pug
app.set('view engine', 'pug')
app.set('views', './views')

// routes
app.use("/", usersRoute);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
