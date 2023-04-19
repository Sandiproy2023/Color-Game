// let color_cord = document.getElementById('color');
// let change_color = document.getElementById('color');


function app (){
    // color = color_cord.value;
  let leater = "0123456789ABCDEF";
  // console.log(leater.length);
  let color = "#";

  for(let i = 0; i<6; i++){
  color +=leater[Math.floor(Math.random()*16)]   
  }
  return color;
}
document.body.style.accentColor = app();





// color_cord.style.backgroundColor = '#f0123456'
    