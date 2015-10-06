var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//=======[[ARRAY]]========//
var image = new Image()
image.src = "./images/socks.png";
//====[[ Of Images ]]====// 

function init() {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};