//ID:620068486
//Kerry-Ann Lewis


 var loser = false;
window.onload = function() {
   var boundaries= $$("div#maze div.boundary");
   $("start").onclick = startGameClick;
   $("end").onmouseover= endMaze;
   for (var i = 0; i<boundaries.length; i++)
   {
     boundaries[i].onmouseover = overBoundary;
   }
   
};


function startGameClick()
{
  loser=false;
  var boundaries = $$('div#maze div.boundary');
  for (var i=0; i < boundaries.length; i++)
  {
    boundaries[i].removeClassName("youlose");
  }
}

function overBoundary() {
   loser = true;
   var boundaries= $$("div#maze div.boundary");
   for (var i = 0; i<boundaries.length; i++)
   { 
   	boundaries[i].addClassName("youlose");
    }
    alert("YOU LOST THE GAME, EXIT MAZE AND START OVER");

}

function endMaze() 
{
  if(loser)
  {
    alert("YOU LOST THE GAME");
  }
  else
  {
    alert("CONGRATS!!! YOU WON!! :D");
  }
	}