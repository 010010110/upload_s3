const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer.js");

const Post = require("./models/Post.js");
const Laudos = require('./models/Laudos.js');




routes.get('/laudo', async (req, res) => {
  const response = await new Laudos().getLaudo(req.query);

  res.send(response);
});


routes.get("/posts", async (req, res) => {
  const posts = await Post.find();

  res.json(posts);
});

routes.post("/posts", multer(multerConfig).array("file", 7), async (req, res) => {
  const { numrecolhimento } = req.query;


const response = req.files.map(async (file) => {
    const { originalname: name, size, key, location: url = "" } = file;
    return await Post.create({
      numrecolhimento,
      name,
      size,
      key,
      url
    });
  });
  res.json(Promise.all(response));
});

routes.delete("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  await post.delete();

  res.status(200);
});

module.exports = routes;