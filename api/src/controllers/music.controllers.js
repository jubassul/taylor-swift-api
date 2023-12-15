const { listErasMusicsService, listTopMusicsService } = require("../service/index");

const listErasMusics = async (req, res) => {
  const erasMusics = await listErasMusicsService();
  return res.status(200).json(erasMusics);
};

const listTopMusics = async (req, res) => {
  const topMusic = await listTopMusicsService();
  return res.status(200).json(topMusic);
};
module.exports = {
  listErasMusics,
  listTopMusics,
};
