const serieModel = require('./../models/series.js')

class seriesServices {
    async findAll(){
        return await serieModel.find();
    }

    async findById(id){
        return await serieModel.findById(id);
    }

    async createSerie(serie){
        return await new serieModel(serie).save();
    }

    async updateSerie(serie, id){
        return await serieModel.findOneAndUpdate({ _id: id }, serie)
    }

    async deleteSerie(id){
        return await serieModel.findOneAndDelete(id)
    }
}

module.exports = seriesServices;