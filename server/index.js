const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
app = express();
var vidTitle = "video";
var format = "";

app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/form', (req,res) => {
    format = req.query.format.toLowerCase();
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    //replace "video" with videoname
    //problem: ytdl.getinfo needs some time, so programm needs to wait somehow
    ytdl.getInfo(URL, function(err, info) {
        title = info.title;
        vidTitle = title;
        console.log("inside: " + vidTitle);
        });
    
    console.log("fun: " + vidTitle);
    res.header('Content-Disposition', `attachment; filename=${vidTitle}.${format}`); 
    ytdl(URL, {
      format: `${format}`
    }).pipe(res);
});