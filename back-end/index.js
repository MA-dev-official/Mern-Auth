import  dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});


import app from "./src/app.js";
import "./src/config/dbConnection.js";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on  ${port}`);
});