import Rectangle from "./rectangle";
import player from "./player";

let canvas=document.getElementById("canvas");

let context=canvas.getContext("2d");


var window_height=window.innerHeight;
var window_width=window.innerWidth;

canvas.width=window_width;
canvas.height=window_height;
canvas.style.background='purple';

context.fillStyle='red'

let my_rectangle=new Rectangle(random_x,0,45,'red',10);


let my_player=new player(canvas,3);



function game(){
    canvas.style.background='purple';
    my_player.draw(context);
    my_rectangle.draw(context);
}

setInterval(game,1000/60);










