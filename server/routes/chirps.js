const express = require("express");
let router = express.Router();
let store = require("../chirpstore");

router.post("/", (req, res) => {
  store.CreateChirp(req.body);
  res.sendStatus(200);

});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json(store.GetChirp(id));
  
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.json(store.DeleteChirp(id));
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let text = req.body
  res.json(store.UpdateChirp(id,text));
});

module.exports = router;
