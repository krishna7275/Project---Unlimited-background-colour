const randomColour = function (){
const hex = '0123456789ABCDEF';
let color ='#';
for(let i =0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
}
return color
}
let interverl;
const startChangingColour = function (){

  if(!interverl){
      interverl = setInterval(changeBgColor,1000);
  }
 function changeBgColor(){
document.body.style.background = randomColour();
 }
}
const stopChangingColour = function (){
 clearInterval(interverl);
 interverl = null;
}

 document.querySelector('#start').addEventListener(
    'click', startChangingColour);
 document.querySelector('#stop').addEventListener('click',stopChangingColour);