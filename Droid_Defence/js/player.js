           const player={
            x:canvas.width/2,
            y:canvas.height-70,
            radius:40,
            color:'pink'
        
        };
        
        document.addEventListener("mousemove",movePlayer);
        
        function movePlayer(event){
            const rect = canvas.getBoundingClientRect();
            player.x=event.clientX-rect.left;
        
        }
        
        function drawPlayer(){
            
                context.beginPath();
                context.arc(player.x,player.y,player.radius,0,Math.PI*2);
                context.fillStyle=player.color;
                context.fill();
                context.closePath();
        
            }
        
            function draw(){
                context.clearRect(0,0,canvas.width,canvas.height);
                drawPlayer();
                requestAnimationFrame(draw);
        
            }
        
        draw(context);
        

