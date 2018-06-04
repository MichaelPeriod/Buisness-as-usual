function SettingsVisual(){

  background("#b7cc00");

  ctx.drawImage(xButton, canvas.width-(canvas.height/8)-itemEnlargment.i1, 0, canvas.height/8+itemEnlargment.i1, canvas.height/8+itemEnlargment.i1);//x button
  text("Settings:", canvas.width/36, canvas.height/7, "Black", "left", canvas.height/7);

  text("Resolution:", canvas.width/36, canvas.height*3/7, "Black", "left", canvas.height/15);
  colorRect(canvas.width/36, canvas.height*7/14, canvas.width/4, canvas.height*3/14, "#ffffff");
  text(settings.res + "p", canvas.width*10/72, canvas.height*9/14, "Black", "center", canvas.height*2/14);

  colorRect(canvas.width/4, canvas.height*3/4, canvas.width/2, canvas.height/6, "#464727");

}

function ChangeSettings(){

  if(mouse.x >= canvas.width-(canvas.height/8) && mouse.x <= canvas.width && mouse.y >= 0 && mouse.y <= canvas.height/8){

    itemEnlargment.i1 = 5/720*settings.res;

  } else {

    itemEnlargment.i1 = 0;

  }
}

function saveSettings(){

  canvas.height = settings.res;
  canvas.width = settings.res/9*16;

}
