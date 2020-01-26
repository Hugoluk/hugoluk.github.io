//var PORT = process.env.PORT || 4000;
var server = location.host; // + ':' + PORT;
var convertBtn = document.querySelector('.convert-button');

convertBtn.addEventListener('click', () => {
    var URL = getUrlVars()["URL"];
    var selectM = document.getElementById("selectMenu");
    var format = selectM.options[selectM.selectedIndex].text;
    console.log('server: ' + server);
    sendFormat(URL, format);
});

function sendFormat(URL, format) {
    window.location.href = `${server}/form?format=${format}`;
    sendURL(URL);
}

function sendURL(URL) {
    window.location.href = `${server}/download?URL=${URL}`;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}