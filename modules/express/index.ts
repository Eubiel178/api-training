import express from "express";

const routes = require("../../src/routes");

const app = express();
const port = 3000;

//routes
app.use(routes.user);

app.listen((request: express.Request, response: express.Response): void => {
  console.log(`Server is runnig in port ${port}`);
});
