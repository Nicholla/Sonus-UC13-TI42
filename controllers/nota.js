var vnota = []

function estatic_create(req, res){
    let{nota, comentario, musica, usuario} = req.body
  
     var ouser = {
        "id": vnota.length+1,
        "nota":nota,
        "comentario":comentario,
        "musica":musica,
        "usuario":usuario,
        "deleteAt":null 
    }
    vnota.push(ouser)
    return res.status(201).json({
        message: "Estatisticas criadas",
    })
}

function all_estatic(req,res){
    return res.status(200).json({
        message: "Todas Estatisticas",
        db: vnota.filter(u => u.deleteAt == null)
    }) 
} 

function busc_estatic(req,res){
    
    let { id } = req.params;

    const idx = vnota.findIndex(u => u.id == id)

    if(idx == -1 || vnota[idx].deleteAt != null){
        return res.status(404).json({
            message: "Estatistica não encontrada",
            db: null
    })
      
    }
    
    return res.status(202).json({
        message: "Estatistica encontrada",
        db: vnota[idx]
    }) 
}

function busc_estatic_body(req,res){
    
    let { id } = req.params;

    const idx = vnota.findIndex(u => u.id == id)

    if(idx == -1 || vnota[idx].deleteAt != null){
        return res.status(404).json({
            message: "Estatistica não encontrada",
            db: null
    })
      
    }
    let{nota, comentario, musica, usuario} = req.body

    if(nota) vnota[idx].nota = nota
    if(comentario) vnota[idx].comentario = comentario
    if(musica) vnota[idx].musica = musica
    if(usuario) vnota[idx].usuario = usuario 

    return res.status(202).json({
        message: "Estatistica encontrada",
        db: vnota[idx]
    }) 
}

function delete_user(req, res){
    let {id}= req.params

    const idx = vnota.findIndex(u => u.id == id)
    if(idx != -1){
        vnota[idx].deleteAt = new Date()
        return res.status(203).json({
            message: "Deletado",
        })
    }

    return res.status(404).json({
        message: "Não encontrado",
    })
}

module.exports = {
    estatic_create,
    all_estatic,
    busc_estatic,
    busc_estatic_body,
    delete_user 
}