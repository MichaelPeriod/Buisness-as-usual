function HomePage(){

  background("#49b501");
  text("Buisness As Usual", canvas.width/2, canvas.height/10, "#05646d", "center", canvas.height/10);
  colorRect(canvas.width/4 - itemEnlargment.i1, canvas.height/7 - itemEnlargment.i1, canvas.width/2 + 2*itemEnlargment.i1, canvas.height*2/7 + itemEnlargment.i1*2, "#ddba0b"); //start
  text("New Game", canvas.width/2, canvas.height*5/14, "Black", "center", 130/720*settings.res + (itemEnlargment.i1/2));
  colorRect(canvas.width/4-itemEnlargment.i2, canvas.height*4/7-itemEnlargment.i2, canvas.width/2 + itemEnlargment.i2*2, canvas.height*2/7 + itemEnlargment.i2*2, "#ddba0b"); //load
  text("Load Game", canvas.width/2, canvas.height*11/14, "Black", "center", 130/720*settings.res + (itemEnlargment.i2/2));
  colorRect(canvas.width-(canvas.height/8)-itemEnlargment.i3, 0, canvas.height/8+itemEnlargment.i3, canvas.height/8+itemEnlargment.i3, "#ddba0b");//settings
  ctx.drawImage(settingsIcon,canvas.width-(canvas.height/8)-itemEnlargment.i3, 0, canvas.height/8+itemEnlargment.i3, canvas.height/8+itemEnlargment.i3);
}

function ChangeHome(){

  if(mouse.x >= canvas.width/4 && mouse.x <= canvas.width*3/4 && mouse.y >= canvas.height/7 && mouse.y <= canvas.height*3/7){

    itemEnlargment.i1 = 5/720*settings.res;

  } else {

    itemEnlargment.i1 = 0;

  }

  if(mouse.x >= canvas.width/4 && mouse.x <= canvas.width*3/4 && mouse.y >= canvas.height*4/7 && mouse.y <= canvas.height*6/7){

    itemEnlargment.i2 = 5/720*settings.res;

  } else {

    itemEnlargment.i2 = 0;

  }

  if(mouse.x >= canvas.width-(canvas.height/8) && mouse.x <= canvas.width && mouse.y >= 0 && mouse.y <= canvas.height/8){

    itemEnlargment.i3 = 5/720*settings.res;

  } else {

    itemEnlargment.i3 = 0;

  }

}
