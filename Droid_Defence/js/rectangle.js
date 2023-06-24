export default class Rectangle{
    
    constructor(xpos,ypos,size,color,speed){
        this.xpos=xpos;
        this.ypos=ypos;
        this.size=size;
        this.color=color;
        this.speed=speed;

        this.dy=1*this.speed;
    }

    draw(context){
        context.beginPath();
        context.lineWidth=5;
        context.fillRect(this.xpos, this.ypos, 45,45);
        context.stroke();
        context.closePath();
    }

    update(){
        context.clearRect(0,0,window_width, window_height);
        this.draw(context);
       if ((this.ypos+this.size)>window_height){
        let random_y=Math.random()*window_height
           this.xpos=random_y;
           this.ypos=0;
           this.ypos+=this.dy
        }

        this.ypos+=this.dy;}
        
    
    
}



var all_rectangles=[];

let random_x=Math.random()*window_width;

let randomNumber=function(min,max){
    var result = Math.random()*(max-min)-min;
    console.log(result);
    return result
}


for(var i=0; i<10; i++){
    var size=45
    var random_y=randomNumber(size,(window_width-size));
    let my_rectangle=new Rectangle(random_y,0,size,'red',10);
    all_rectangles.push(my_rectangle);

}





let my_rectangle=new Rectangle(random_x,0,45,'red',10);
my_rectangle.draw(context);

let updateRectangle=function(){
    requestAnimationFrame(updateRectangle);
    all_rectangles.forEach(element => {
        element.update();
    })


}

updateRectangle();
