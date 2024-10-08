const express = require('express')
const app = express()
app.use( express.json() )

const cr_nota = require('./nota')
app.use('/nota', cr_nota)

const cr_user = require('./user')
app.use('/user', cr_user)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})