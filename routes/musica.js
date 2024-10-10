const express = require('express')
const router = express.Router
/*router.use(express.json())*/
const cmusic = require ('../controllers/Musica')
''
router.post('/create/:id', cmusic.create_music)

/* Codigo 201 = Created (Criado)
   Codigo 200 = OK (A rota foi alcançada, mas nao existe nada dentro)
   Codigo 203 = Sucesso*/

router.post('/create/:id', cmusic.create_music1)

router.get('/read/:id', cmusic.find_music)

router.get('/show/:id', cmusic.show_music)

router.put('/update/:id', cmusic.update_music)

/* Nunca utilizar dois metodos iguais, sempre diferente
 Hashtag triplo (###) no arquivo http serve para separar
 Sinal de igual triplo (===) indica o mesmo valor e mesmo tipo
 Colocar parenteses e asterisco (/*) inicia um comentario e esse mesmo simbolo ao contrario finaliza o comentario 
 Se voce quiser dar um softdelete voce faz a funcao vmusic.slice(idx)*/

router.delete('/delete/:id', cmusic.delete_music)

module.exports = router