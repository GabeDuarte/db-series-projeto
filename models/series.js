const mongoose = require('mongoose')

const Serie = new mongoose.Schema({
    nome: {type: String,
    required: true,},

    imagem_url:{type: String,
    required: true,},

    ano_lancamento: {type: String,
    required: true,},
    
    yt_link: {type: String,
    required: false},

    descriçao: {type: String,
    required: false},

})

module.exports = mongoose.model('serie', Serie);