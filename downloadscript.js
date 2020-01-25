var server = 'http://localhost:4000';
var convertBtn = document.querySelector('.convert-button');

convertBtn.addEventListener('click', () => {
    var URL = getUrlVars()["URL"];
    var selectM = document.getElementById("selectMenu");
    var format = selectM.options[selectM.selectedIndex].text;
    //console.log(`URL: ${URL}`);
    //console.log(`Format: ${format}`);
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