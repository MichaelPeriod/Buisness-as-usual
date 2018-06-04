document.addEventListener('keyup', function(e){

});

document.addEventListener('mousemove', function(e){

	mouse.y = event.clientY;
  mouse.x = event.clientX;

  if(screenNum === 0){

    ChangeHome();

  }

});

canvas.addEventListener('mousedown', function(e){

  mouse.press = true;

});

canvas.addEventListener('mouseup', function(e){

	mouse.press = false;

	buttonCheck();

});
