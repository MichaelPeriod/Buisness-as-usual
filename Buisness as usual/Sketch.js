//interval not repeting problem

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var mouse = {

  x: 0,
  y: 0,
  press: false

};

var settings = {

  res: 720,
  resO1: 480,
  resO2: 720,
  resO3: 1080,
  difficulty: "medium"

};

var settingsIcon = new Image()
var xButton = new Image()

var pause = false;
var screenNum = 0;
var itemEnlargment = {

  i1: 0,
  i2: 0,
  i3: 0

};

ImgLoad();

function ImgLoad(){

  settingsIcon.src = "Images/SettingsIcon.png";
  xButton.src = "Images/X.png";

}

setInterval(run,1000/30);

function run(){

  if(!pause){

    switch (screenNum) {
      case 0:

        HomePage();
        ChangeHome();

        break;
      case 1:

        SettingsVisual();
        ChangeSettings();

        break;

    }
  }
}

function buttonCheck(){

  switch (screenNum) {
    case 0:

      if(mouse.x >= canvas.width-(canvas.height/8) && mouse.x <= canvas.width && mouse.y >= 0 && mouse.y <= canvas.height/8){

        screenNum = 1;

      }

      break;
    case 1:

      if(mouse.x >= canvas.width-(canvas.height/8) && mouse.x <= canvas.width && mouse.y >= 0 && mouse.y <= canvas.height/8){

        screenNum = 0;

      }
      if(mouse.x >= canvas.width/36 && mouse.x <= canvas.width/4 + canvas.width/36 && mouse.y >= canvas.height/2 && mouse.y <= canvas.height*10/14){

        switch (settings.res) {
          case settings.resO1:
              settings.res = settings.resO2;
            break;
          case settings.resO2:
            settings.res = settings.resO3;
            break;
          case settings.resO3:
            settings.res = settings.resO1;
            break;

        }

          break;

      }
      if(mouse.x >= canvas.width/4 && mouse.x <= canvas.width*3/4 && mouse.y >= canvas.height*3/4 && mouse.y <= canvas.height*11/12){

        saveSettings();

      }

      break;
  }
}

function line(x1,y1,x2,y2,color){

	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.fillStyle = color;

}

function text(Txt, PosX, PosY, color, align, px){

	ctx.font = px + "px Times New Romen";
	ctx.fillStyle = color;
	ctx.textAlign = align;
	ctx.fillText(Txt, PosX, PosY);

}

function colorRect(leftX, TopY, width,height, drawColor){
	ctx.fillStyle = drawColor;
	ctx.fillRect(leftX,TopY,width,height);
}

function background(color){
  ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function colorCircle(centerX, centerY, redius, drawColor){

	ctx.fillStyle = drawColor;
	ctx.beginPath();
	ctx.arc(centerX, centerY, redius, 0,Math.PI*2, true);
	ctx.fill();

}
