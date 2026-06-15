import express from "express";

const router = express.Router();

router.get("/users", (request: express.Request, response: express.Response) => {
  console.log(request, "request");
  console.log(response, "response");

  response.send({
    status: 200,
  });
});

module.exports = {
  user: router,
};
