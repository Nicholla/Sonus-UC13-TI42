var vmusic = [];

function create_music(req,res) {
    let {pesquisarmusica, artista, album, faixa, datadelancamento } = req.body;
    let omusic={
        "id": vmusic.length + 1,
        "pesquisarmusica": pesquisarmusica,
        "artista": artista,
        "album": album,
        "faixa": faixa,
        "datadelancamento": datadelancamento,
        "deletedAt": null
    }
    vmusic.push(omusic)
    return res.status(201).json({
        message: "Musica adicionada",
        db: vmusic[vmusic.length - 1]
    });
}

function show_music(req, res) {
    let { id } = req.params;

    const music = vmusic.find(m => m.id == id);
    if (!music || vmusic[music].deletedAt !== null) {
        return res.status(404).json({
            message: "Nao encontrada",
            db: null
        });
    }

    let { pesquisarmusica, artista, album, faixa, datadelancamento } = req.body;
    if (pesquisarmusica) vmusic[music].pesquisarmusica = pesquisarmusica;
    if (artista) vmusic[music].artista = artista;
    if (album) vmusic[music].album = album;
    if (faixa) vmusic[music].faixa = faixa;
    if (datadelancamento) vmusic[music].datadelancamento = datadelancamento;

    return res.status(200).json({
        message: "Musica encontrada",
        db: vmusic[music]
    });
}

function read_music(req, res) {
    return res.status(200).json({
        message: "Músicas encontradas",
        db: vmusic.filter(m => m.deletedAt === null) 
    });
}

function update_music(req, res) {
    let { id } = req.params;

    const music = vmusic.find(m => m.id == id);
    if (!music || vmusic[music].deletedAt !== null) {
        return res.status(404).json({
            message: "Nao alterada",
            db: null
        });
    }

    let { pesquisarmusica, artista, album, faixa, datadelancamento } = req.body;
    if (pesquisarmusica) vmusic[music].pesquisarmusica = pesquisarmusica;
    if (artista) vmusic[music].artista = artista;
    if (album) vmusic[music].album = album;
    if (faixa) vmusic[music].faixa = faixa;
    if (datadelancamento) vmusic[music].datadelancamento = datadelancamento;

    return res.status(200).json({
        message: "Musica alterada",
        db: vmusic[music]
    });
}


function delete_music(req, res) {
    let { id } = req.params;

    const music = vmusic.find(m => m.id == id);
    if (!music || vmusic[music].deletedAt !== null) {
        return res.status(404).json({
            message: "Nao alterada"
        });
    }
    music.deletedAt = new Date();
        return res.status(200).json({
            message: "Musica removida"
        });
    }

module.exports = {
    create_music,
    show_music,
    read_music,
    update_music,
    delete_music
}