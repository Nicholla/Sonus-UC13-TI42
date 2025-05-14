import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from './generated/prisma/index.js';
import cors from 'cors';

const app = express();
const port = 4000;
const prisma = new PrismaClient();
app.use(bodyParser.json());
app.use (cors()); // Permissão de requisição de qualquer lugar


app.get('/', (req, res) => {
  res.send("Rélô!");
});

/*const cr_nota = require('./routes/nota')
app.use('/nota', cr_nota)*/

/*const cr_user = require('./user')
app.use('/user', cr_user)*/

app.get("/album", async (req, res) => {
    const album = await prisma.album.findMany();
    res.json(album);
});

app.get("/album/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const album = await prisma.album.findUnique( {where:{id}} );
    if (album === null){
        res.status(404).send("Album não encontrado");
    }else{
        res.json(album);
    }
});


app.get("/artista", async (req, res) => {
    const artista = await prisma.artista.findMany();
    res.json(artista);
});

app.get("/artista/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const artista = await prisma.artista.findUnique( {where:{id}} );
    if (artista === null){
        res.status(404).send("Artista não encontrado");
    }else{
        res.json(artista);
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

app.get("/usuario", async (req, res) => {
    const usuario = await prisma.usuario.findMany();
    res.json(usuario);
});

app.get("/usuario/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = await prisma.usuario.findUnique( {where:{id}} );
    if (usuario === null){
        res.status(404).send("Usuário não encontrado");
    }else{
        res.json(usuario);
    }
});


app.post("/usuario", async (req, res) => {
    if ((req.body.nome === undefined) || (req.body.preco === undefined)){
        res.status(400).send("Campos obrigatórios faltantes");
    }else{
        const novoUsuario = await prisma.usuario.create({data: {
            nome:req.body.nome,
            preco: req.body.preco
        }});
        res.status(201).location(`/usuario/${novoUsuario.id}`).send();
    }
});


app.get("/preferencias", async (req, res) => {
    const preferencias = await prisma.preferencias.findMany();
    res.json(preferencias);
});

app.get("/preferencias/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const preferencias = await prisma.preferencias.findUnique( {where:{id}} );
    if (preferencias === null){
        res.status(404).send("Preferência não encontrada");
    }else{
        res.json(preferencias);
    }
});


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

// app.put("/produtos/:id", async (req, res) => {
//     const id = parseInt(req.params.id);
//     if ((req.body.nome === undefined) || (req.body.preco === undefined)){
//         res.status(400).send("Campos obrigatórios faltantes");
//     }else{
//         try{
//         await prisma.produto.update({
//             where: { id },
//             data: {
//                 nome: req.body.nome,
//                 preco: req.body.preco
//                 }  
//             });
//             res.status(204).send();
//         } catch(error){
//             res.status(404).send("Produto não encontrado");
//         }
//     }
// })


// app.delete("/produtos/:id", async (req, res)=> {
//     const id = parseInt(req.params.id);
//     try{
//     await prisma.produto.delete({
//         where: { id }
//     });
//     res.status(202).send();
//     } catch(error){
//         res.status(404).send("Produto não encontrado");
//     }
// });

app.listen(port, () => {
    console.log(`REST API iniciada. Servidor está em http://localhost:${port})`);
    });
  