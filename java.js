let colors = ["black","white","gold","red","green","violet"];

function btncolor(){
  let random = Math.floor(Math.random() * colors.length);
  let z = document.getElementById(`fondo`).style.background = colors[random];

}


