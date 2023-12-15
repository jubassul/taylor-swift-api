const express = require("express"); 
require('dotenv').config();

const app = express(); 
const routes = require("./routes")
const port = process.env.PORT || 5000; 

app.use(express.json()); 

app.use('/api', routes.musicsRouter)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
