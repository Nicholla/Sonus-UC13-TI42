var vmusic = []

function create_music(ppesquisarmusica, partista, palbum, pfaixa, pdatadelancamento){
    var omusic = {
        "id": vmusic.length+1,
        "pesquisarmusica":ppesquisarmusica,
        "artista":partista,
        "album": palbum,
        "faixa":pfaixa,
        "datadelancamento": pdatadelancamento,
        "deletedAt": null
    }
    vmusic.push(omusic)
}
function create_music1 (req, res) {
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

function find_music(req, res) {
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

function show_music(req,res) {
    let {id} = req.params
    
    const music = vmusic.findIndex(u => u.id == id)
    
    if (music == -1 || vmusic.deletedAt != null){
            return res.status(404).json({
                message: "Nao encontrada",
                db: null       
            })
        }
}

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

function delete_music(req, res){
    let {id} = req.params
    
    const music = vmusic.findIndex(m => m.id == id)
    if (music != -1){
            vmusic[music].deletedAt = new Date()
            return res.status(203).json({
            message: "Musica deletada",
            db: vmusic[music]
        })
    }
     return res.status(404).json({
            message: "Nao foi adicionada",
            db: null
    })
}

module.exports = {
    create_music,
    create_music1,
    find_music,
    show_music,
    update_music,
    delete_music
}