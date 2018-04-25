'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get("/", (req,res) => sendContent("index", res));
app.get("/about", (req,res) => sendContent("about", res));

function sendContent(content, res) {
  fs.readFile("./templates/template.html", (err, template) => {

      fs.readFile( `./content/${content}.txt`, (err,content) => {

        let html = template.toString().replace("{body}", content.toString());
        res.send(html);

      });

  });
}


app.listen(8000, () => "Up");
