const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
var format = "";

app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/form', (req,res) => {
    format = req.query.format.toLowerCase();
});

app.get('/download', (req,res) => {
    console.log("Format: " + format)
    var URL = req.query.URL;
    res.header('Content-Disposition', `attachment; filename=video.${format}`); //TODO: replace "video" with videoname
    ytdl(URL, {
      format: `${format}`
    }).pipe(res);
});