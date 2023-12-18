const { listAllMusicsService, listTopMusicsService } = require("../service/index");

const listAllMusics = async (req, res) => {
  const erasMusics = await listAllMusicsService();
  return res.status(200).json(erasMusics);
};

const listTopMusics = async (req, res) => {
  const topMusic = await listTopMusicsService();
  return res.status(200).json(topMusic);
};
module.exports = {
  listAllMusics,
  listTopMusics,
};
