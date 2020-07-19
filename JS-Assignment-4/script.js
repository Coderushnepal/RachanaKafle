var btn = document.getElementById('btn');
btn.addEventListener("click", function(){
// everytime div is created   
var ball= document.createElement('div');
var box = document.getElementById("box1");
 //style in ball
ball.style.height ="25px";
ball.style.width ="25px";
ball.style.backgroundColor = "red";
ball.style.borderRadius= "50%";
ball.style.position="absolute";

ball.style.top=Math.random() * (box.clientHeight - 25) + "px";
ball.style.left=Math.random() * (box.clientWidth - 25) + "px";
//add ball in box
box.appendChild(ball);
});