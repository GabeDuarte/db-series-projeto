const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const seriesRoutes = require('./routes/series.routes');

mongoose.connect('mongodb://localhost:27017/series', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,});

const port = 5000;

const Serie = require('./models/series')

const app = express();
app.use(express.json());

app.use(seriesRoutes);


const corsOptions = {
    origin: 'http:localhost:3000',
    optionsSucessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, ()=>{console.info(`Seu sevidor está rodando em: http://localhost:${port}`)});



// app.get('/', (req, res)=> {
//     res.send('Olá usuário! aqui é o inicio do projeto de series')
// })



// app.get('/series', async (req, res)=> {
//     const series = await Serie.find();
//     res.send(series);
// });


// app.get('/series/:id', async(req, res)=>{
   
//     try {const serie = await Serie.findById(req.params.id);

//         if (serie == null){
//             res.status(404).send({message: "jogo não encontrado!"})
//         }
//         res.send(serie);
//     }catch(err){
//         return res.status(500).send({message: err.message})
//     }

// })

// app.post('/series', async (req, res)=>{
//     const serie = new Serie({
//         nome: req.body.nome,
//         imagem_url: req.body.imagem_url,
//         ano_lancamento: req.body.ano_lancamento,
//         yt_link: req.body.yt_link,
//         descriçao: req.body.descriçao,
//     });
//     if (!serie || !serie.imagem_url || !serie.nome || !serie.ano_lancamento || !serie.yt_link || !serie.descriçao) {
//         res.status(400).send({message: 'A serie deve conter: nome, imagem_url, ano_lancamento, yt_link e descriçao!'});
//         return;
//     };
//     const SerieSalvo = await serie.save();
//     res.send(SerieSalvo);
// });



// app.put('/series/:id', async(req, res)=>{
    
//         try{
//             const serie = await Serie.findByIdAndUpdate(req.params.id);
//             const newSerie = req.body;

//             if (
//                 newSerie.nome && newSerie.imagem_url && newSerie.ano_lancamento && newSerie.yt_link && newSerie.descriçao !== null
//             ){
//                 serie.nome = newSerie.nome;
//                 serie.imagem_url = newSerie.imagem_url;
//                 serie.ano_lancamento = newSerie.ano_lancamento;
//                 serie.yt_link = newSerie.yt_link;
//                 serie.descriçao = newSerie.descriçao;
//             } else { return res.status(500).send({message: "Não foi possível completar a sua requisição de atualização! verifique os erros e tente novamente."})};
//             const serieUpdated = await serie.save();
//             res.send(serieUpdated);
//         }   
//         catch (err){
//             return res.status(500).send({message: err.message})
//         }
        
// });



// app.delete('/series/:id', async (req,res)=>{
//     try{
//         const serie = await Serie.findById(req.params.id);
//         if (serie == null) {
//             res.status(404).send({message: 'A serie que você está tentando deletar nao foi encontrada, ou não existe! verifique o ID e tente novamente.'})
//         };
//         await serie.remove();
//         res.send({message: "Serie removida com sucesso."});
//     } catch(err){
//         return res.status(500).send({message: err.message})
//     }
// })


