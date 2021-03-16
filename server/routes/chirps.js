const express = require("express");
const chirpstore = require("../chirpstore");
let router = express.Router();
let store = require("../chirpstore");

router.post("/", (req, res) => {
  store.CreateChirp(req.body);
  res.sendStatus(200);

});

router.get("/", (req, res) => {
  const chirps = store.GetChirps();
  res.send(chirps);
  
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  chirpstore.DeleteChirp(id)
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let text = req.body
  store.UpdateChirp(id,text);
  res.sendStatus(200)
});

module.exports = router;
