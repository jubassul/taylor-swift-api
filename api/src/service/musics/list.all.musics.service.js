const { default: axios } = require("axios");
const authService = require("../auth/auth.service");
module.exports = listAllMusicsService = async (req, res) => {
  try {
    const accessToken = await authService();
    const searchMusic = await axios.get(
      `https://api.spotify.com/v1/albums?ids=1o59UpKw81iHR0HPiSkJR0,5AEDGbliTTfjOB8TSm1sxt,1fnJ7k0bllNfL1kVdNVW1A,6kZ42qRrzov54LcAk4onW9,4hDok0OAJd57SGIT8xuWJH,6AORtDjduMM3bupSWzbTSG,1pzvBxYgT6OVwJLtHkrdQK,1NAmidJlEaVgA3MpcPFYGq,6DEjYFkNZh67HP7R9PSZvv,5eyZZoQEFQWRHkV2xgAeBw`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(
      "🚀 ~ file: list.eras.musics.service.js:14 ~ module.exports=listErasMusicsService= ~ searchMusic:",
      searchMusic.data
    );
    return searchMusic.data;
  } catch (error) {
    console.log("Erro ao listar as músicas da Taylor Swift", error);
  }
};
