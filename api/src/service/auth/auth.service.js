const { default: axios } = require("axios");
const { password } = require("pg/lib/defaults");

//autenticação e obtenção do token de acesso;
const CLIEND_ID = process.env.CLIEND_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

module.exports = authService = async () => {
  try {
    const authResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        auth: {
          username: CLIEND_ID,
          password: CLIENT_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded ",
        },
      }
    );
    return authResponse.data.access_token;
  } catch (error) {
    console.error("Erro ao obter token de acesso:", error);
    throw new Error("Erro ao obter token de acesso");
  }
};
0;
