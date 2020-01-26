const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path');
app = express();
var PORT = process.env.PORT || 4000; //Portnumber Heroku gives us or 4000
var vidTitle = "video";
var format = "";

app.use(cors());
app.use(express.static("client"));

app.listen(PORT, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/index.html'));
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