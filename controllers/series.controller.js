const seriesServices = require("./../services/series.service.js");
const mongoose = require("mongoose");

const seriesServices = new seriesServices();

class seriesController{
  async getSeries(req, res) {
    const series = await seriesServices.findAll();
    res.send(series);
  }

  async getSeriesById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const serie = await seriesServices.findById(id);


    if (!serie) {
      res.status(404).send("A Serie não foi encontrada.");

      return;
    }

    res.send(serie);
  }

  async createSerie(req, res) {
    const serie = req.body;



    if (!serie|| !serie.nome || !serie.imagem_url || !serie.ano_lancamento || !serie.yt_link || !serie.descriçao) {
      res.status(400).send({
        message:
          'Serie inválida, sua serie deve conter: serie.nome, serie.imagem_url, serie.ano_lancamento, serie.yt_link e serie.descriçao',
      });

      return;
    }

    const serieSalva = await seriesServices.createSerie(serie);

    res.send(serieSalva);
  }

  async updateSerie(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send("ID inválido.");
      return;
    }

    const serie = await seriesServices.findById(id);


    if (!serie) {
      res.status(404).send("Serie não encontrada");

      return;
    }

    const novaSerie = req.body;

    if (!Object.keys(novaSerie).length) {
      res.status(400).send({ message: "O body da requisição está vazio." });

      return;
    }

    if (!novaSerie || !novaSerie.nome || !novaSerie.imagem_url || !novaSerie.ano_lancamento || !novaSerie.yt_link || !novaSerie.descriçao) {
      res.status(400).send({
        message:
          'Serie inválida, sua serie deve conter: serie.nome, serie.imagem_url, serie.ano_lancamento, serie.yt_link e serie.descriçao',
      });

      return;
    }

    seriesServices.updateSerie(novaSerie, id);
    const serieAtualizada = await seriesServices.findById(id);

    res.send(serieAtualizada);
  }

  async deleteSerie(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("ID inválido.");
      return;
    }

    const serie = await seriesServices.findById(id);

    if (!serie) {
      res.status(404).send("A Serie não foi encontrada.");

      return;
    }

    await seriesServices.delete(id);

    res.send({ message: "Serie excluída com sucesso" });
  }
}

module.exports = seriesController;