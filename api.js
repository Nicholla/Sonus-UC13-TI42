const express = require('express')
const app = express()
app.use( express.json() )

const cr_nota = require('./nota')
app.use('/nota', cr_nota)

const cr_user = require('./user')
app.use('/user', cr_user)

const cr_music = require('./routes/Musica')
app.use('/Musica', cr_music)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})