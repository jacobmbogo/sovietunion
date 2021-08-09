const express = require("express");
const path = require("path");
const fs = require("fs");
const server = express();
const staticDir = path.join(__dirname, `public`);
server.use(express.static(staticDir));
server.get("/", (req, res) => {
    console.log(req.url);
    res
      .status(200)
      .type(".html")
      .sendFile(path.join(__dirname, "public", "html", "landingpage.html"));
  });