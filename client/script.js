var URLinput = document.querySelector('.URL-input');
var redirectBtn = document.querySelector('.redirect-button');

redirectBtn.addEventListener('click', () => {
     location.href=`/makeJoint.html?URL=${URLinput.value}`;
});

