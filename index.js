import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from './generated/prisma/index.js';

const app = express();
const port = 4000;
const prisma = new PrismaClient();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send("Rélô!");
});

/*const cr_nota = require('./routes/nota')
app.use('/nota', cr_nota)*/

/*const cr_user = require('./user')
app.use('/user', cr_user)*/



app.get("/albuns", async (req, res) => {
    const albuns = await prisma.album.findMany();
    res.json(albuns);
});

app.get("/albuns/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const album = await prisma.album.findUnique( {where:{id}} );
    if (album === null){
        res.status(404).send("Album não encontrado");
    }else{
        res.json(album);
    }
});

// app.get("/albuns/recentes", async (req, res) => {
//     try {
//         const albuns = await prisma.album.findMany({
//             orderBy: {
//                 id: 'desc' // ou 'createdAt', se disponível
//             },
//             take: 5
//         });
//         res.json(albuns);
//     } catch (error) {
//         res.status(500).send("Erro ao buscar álbuns recentes.");
//     }
// });




app.get("/artistas", async (req, res) => {
    const artistas = await prisma.artista.findMany();
    res.json(artistas);
});

app.get("/artistas/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const artista = await prisma.artista.findUnique( {where:{id}} );
    if (artista === null){
        res.status(404).send("Artista não encontrado");
    }else{
        res.json(artista);
    }
});



app.get("/avaliacao", async (req, res) => {
    const avaliacao = await prisma.avaliacao.findMany();
    res.json(avaliacao);
});

app.get("/avaliacao/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const artista = await prisma.avaliacao.findUnique( {where:{id}} );
    if (artista === null){
        res.status(404).send("Avaliação não encontrada");
    }else{
        res.json(avaliacao);
    }
});



app.get("/musica", async (req, res) => {
    const musica = await prisma.musica.findMany();
    res.json(musica);
});

app.get("/musica/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const musica = await prisma.musica.findUnique( {where:{id}} );
    if (musica === null){
        res.status(404).send("Música não encontrada");
    }else{
        res.json(musica);
    }
});

// app.get("/musica/recentes", async (req, res) => {
//     try {
//         const musicas = await prisma.musica.findMany({
//             orderBy: {
//                 id: 'desc' // ou 'createdAt', se tiver um campo de data
//             },
//             take: 15
//         });
//         res.json(musicas);
//     } catch (error) {
//         res.status(500).send("Erro ao buscar músicas recentes adicionadas.");
//     }
// });


app.get("/usuarios", async (req, res) => {
    const usuarios = await prisma.usuarios.findMany();
    res.json(usuarios);
});

app.get("/usuarios/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const usuarios = await prisma.usuarios.findUnique( {where:{id}} );
    if (usuarios === null){
        res.status(404).send("Usuário não encontrado");
    }else{
        res.json(usuarios);
    }
});



app.post("/usuarios", async (req, res) => {
    if ((req.body.nome === undefined) || (req.body.preco === undefined)){
        res.status(400).send("Campos obrigatórios faltantes");
    }else{
        const novoUsuario = await prisma.usuario.create({data: {
            nome:req.body.nome,
            preco: req.body.preco
        }});
        res.status(201).location(`/usuarios/${novoUsuario.id}`).send();
    }
})


// app.post("/usuarios", async (req, res) => {
//     if ((req.body.nome === undefined) || (req.body.preco === undefined)){
//         res.status(400).send("Campos obrigatórios faltantes");
//     }else{
//         const novoProduto = await prisma.produto.create({data: {
//             nome:req.body.nome,
//             preco: req.body.preco
//         }});
//         res.status(201).location(`/produtos/${novoProduto.id}`).send();
//     }
// })

app.put("/produtos/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if ((req.body.nome === undefined) || (req.body.preco === undefined)){
        res.status(400).send("Campos obrigatórios faltantes");
    }else{
        try{
        await prisma.produto.update({
            where: { id },
            data: {
                nome: req.body.nome,
                preco: req.body.preco
                }  
            });
            res.status(204).send();
        } catch(error){
            res.status(404).send("Produto não encontrado");
        }
    }
})



app.delete("/produtos/:id", async (req, res)=> {
    const id = parseInt(req.params.id);
    try{
    await prisma.produto.delete({
        where: { id }
    });
    res.status(202).send();
    } catch(error){
        res.status(404).send("Produto não encontrado");
    }
});


app.listen(port, () => {
    console.log(`REST API iniciada. Servidor está em http://localhost:${port})`);
    });
  
//     # Environment variables declared in this file are automatically made available to Prisma.
// # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

// # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
// # See the documentation for all the connection string options: https://pris.ly/d/connection-strings

// DATABASE_URL="mysql://root:@10.60.44.70:3306/sonus"