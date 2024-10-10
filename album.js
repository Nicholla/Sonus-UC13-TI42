const express = require('express')
const router = express.Router()

var vusers = []

function create_user(req, res){

    let {genero, idade, nome} = req.body
    
    var ouser = {
        "id":vusers.length,
        "genero":genero,app.listen(3000, () => {
            console.log('http://localhost:3000')
        })
    })
}

router.post( '/create', create_user )

function read_user(req, res){
    return res.status(200).json({
        message: "Todos Usuarios",
        db: vusers.filter(u => u.deletedAt == null)
    })
} 

router.get( "/read", read_user )

function show_user(req, res){
    let{id} = req.params

    const idx = vusers.findIndex(u => u.id === id)

    if(idx == -1 || vusers[idx].deletedAt != null){
        return res.status(404).json({
            message: "Não Encontrado",
            db : null
    })
}

    return res.status(202).json({
    message: "Encontrei",
    db : vusers[idx]
    
    })
}

router.get( '/show/:id', show_user )

function update_user(req, res){
    let{id} = req.params

    const idx = vusers.findIndex(u => u.id == id)

    if(idx == -1 || vusers[idx].deletedAt != null){
        return res.status(404).json({
            message: "Não Encontrado",
            db : null
    })
}

    let {genero, idade, nome} = req.body

    if(genero) vusers[idx].genero = genero
    if(idade) vusers[idx].idade = idade
    if(nome) vusers[idx].nome = nome

    return res.status(202).json({
    message: "Encontrei",
    db : vusers[idx]
    
    })
}

router.put( '/update/:id', update_user )

function delete_user(req, res){
    let {id} = req.params

    const idx = vusers.findIndex(u => u.id == id)
    if(idx != -1){
        vusers[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de Base!"
        })
    }

    return res.status(404).json({
        message: "Não Encontrado"
    })
}

router.delete( '/delete/:id', delete_user )

module.exports = router