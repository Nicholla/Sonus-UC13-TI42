

var valbums = []

function create_album(req, res){

    let {genero, idade, nome} = req.body
    
    var oalbum = {
        "id":valbums.length,
        "genero":genero
    }

    valbums.push(oalbum)

    return res.status(200).json({
        message: "Todos Usuarios",
        db: oalbum
    })
}



function read_album(req, res){
    return res.status(200).json({
        message: "Todos Usuarios",
        db: valbums.filter(u => u.deletedAt == null)
    })
} 


function show_album(req, res){
    let{id} = req.params

    const idx = valbums.findIndex(u => u.id === id)

    if(idx == -1 || valbums[idx].deletedAt != null){
        return res.status(404).json({
            message: "Não Encontrado",
            db : null
    })
}

    return res.status(202).json({
    message: "Encontrei",
    db : valbums[idx]
    
    })
}


function update_album(req, res){
    let{id} = req.params

    const idx = valbums.findIndex(u => u.id == id)

    if(idx == -1 || valbums[idx].deletedAt != null){
        return res.status(404).json({
            message: "Não Encontrado",
            db : null
    })
}

    let {genero, idade, nome} = req.body

    if(genero) valbums[idx].genero = genero
    if(idade) valbums[idx].idade = idade
    if(nome) valbums[idx].nome = nome

    return res.status(202).json({
    message: "Encontrei",
    db : valbums[idx]
    
    })
}


function delete_album(req, res){
    let {id} = req.params

    const idx = valbums.findIndex(u => u.id == id)
    if(idx != -1){
        valbums[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de Base!"
        })
    }

    return res.status(404).json({
        message: "Não Encontrado"
    })
}


module.exports = {
    
    delete_album,
    show_album,
    update_album,
    create_album,
    read_album

}