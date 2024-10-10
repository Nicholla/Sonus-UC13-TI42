const express = require('express')
const app = express()
app.use( express.json() )

const cr_nota = require('./routes/nota')
app.use('/nota', cr_nota)

const cr_user = require('./routes/user')
app.use('/user', cr_user)

const cr_music = require('./routes/musica')
app.use('/Musica', cr_music)


app.listen(3000, () => {
    console.log('http://localhost:3000')
})

