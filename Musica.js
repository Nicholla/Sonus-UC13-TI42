const express = require('express')
const app = express()

app.use(express.json())

var vmusic = []
function create_music(ppesquisarmusica, partista, palbum, pfaixa, pdatadelancamento){
    var omusic = {
        "id": vmusic.length+1,
        "pesquisarmusica":ppesquisarmusica,
        "artista":partista,
        "album": palbum,
        "faixa":pfaixa,
        "datadelancamento": pdatadelancamento
        /*"deleteAt:null*/
    }
    vmusic.push(omusic)
}

function create_music (req, res) {
    let {pesquisarmusica, artista, album, faixa, datadelancamento} = req.body
    
    /* let{variavel1, variavel2} = req.body
                  OU
       let variavel = req.body.variavel*/
    
    create_music(pesquisarmusica, artista, album, faixa, datadelancamento)
    
    return res.status(201).json({
        message: "Musica adicionada",
        db: vmusic[vmusic.length -1]/*.filter(m => m.deletedAt == null)*/
    })
}

app.post('/user/:id', create_music)


/* Codigo 201 = Created (Criado)
   Codigo 200 = OK (A rota foi alcançada, mas nao existe nada dentro)
   Codigo 203 = Sucesso*/

   function read_music(req, res) {
    /* let variavel = req.params.variavel*/
    let{ id } = req.params;

    const music = vmusic.findIndex(m => m.id == id) 
        if (music == -1){
            return res.status(404).json({
                message: "Nao encontrada",
                db: null       
            })
        }
    
    return res.status(200).json({
        message: "Musica encontrada",
        db: vmusic[music]
    })
}

app.get('/user/:id', read_music)

/*function show_user(req,res) {
    let {id} = req.params
    
    const music =vusers.findIndex(u => u.id == id)
    
    if (music == -1 || vusers{music}.deletedAt != null){
            return res.status(404).json({
                message: "Nao encontrada",
                db: null       
            })
}*/


function update_music(req, res) {
    let{ id } = req.params;

    const music = vmusic.findIndex(m => m.id == id) 
        if (music == -1){
            return res.status(404).json({
                message: "Nao alterada",
                db: null       
            })
        }
    
        let {pesquisarmusica, artista, album, faixa, datadelancamento} = req.body
        if (pesquisarmusica) vmusic[music].pesquisarmusica = pesquisarmusica
        if (artista) vmusic[music].artista = artista
        if (album) vmusic[music].album = album
        if (faixa) vmusic[music].faixa = faixa
        if (datadelancamento) vmusic[music].datadelancamento = datadelancamento

    return res.status(200).json({
        message: "Musica alterada",
        db: vmusic[music]
    })
}

app.put('/user/:id', update_music)


/* Nunca utilizar dois metodos iguais, sempre diferente
 Hashtag triplo (###) no arquivo http serve para separar
 Sinal de igual triplo (===) indica o mesmo valor e mesmo tipo
 Colocar parenteses e asterisco (/*) inicia um comentario e esse mesmo simbolo ao contrario finaliza o comentario 
 Se voce quiser dar um softdelete voce faz a funcao vmusic.slice(idx)*/


function delete_music(req, res){
    let {id} = req.params
    
    const music = vmusic.findIndex(m => m.id == id)
    if (music != -1){
        
            vmusic[music].deletedAt = new Date()
            return res.status(203).json({
            message: "Foi de base"
        })
    }
     return res.status(404).json({
            message: "Nao foi adicionada"
    })
}

app.delete_music('/user/:id', delete_music)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})