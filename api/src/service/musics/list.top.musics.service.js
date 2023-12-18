const { default: axios } = require("axios");
const authService = require("../auth/auth.service");
module.exports = listTopMusicsService = async (req, res) => {
  try {
    const accessToken = await authService();
    const searchtopMusic = await axios.get(
      `https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/top-tracks?market=BR`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const response = searchtopMusic.data;
    console.log(
      "🚀 ~ file: list.top.musics.service.js:13 ~ module.exports=listTopMusicsService= ~ response:",
      response
    );
    return response;
  } catch (error) {
    console.error("Erro ao listar as top 10 músicas da Taylor Swift:", error);
  }
};
