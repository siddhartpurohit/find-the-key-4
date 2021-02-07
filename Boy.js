class Boy{
    constructor(x,y){
        var options ={
            restitutuon:0.01,
            friction:0.2,
            density:0.4
        }
       
        this.body = Bodies.rectangle(x,y,20,50,options)
        this.x = x
        this.y = y
        this.health = 100;
        World.add(world, this.body)
    }
     updateHealth(health){
        
        this.health = this.health + health;
     }
     checkHealthStatus()
     {
        if (this.health> 70){
            var colour = "green";
        } else if(this.health > 40){
            var colour = "yellow";
        }
         else if (this.health>0){
            var colour = "orange";
         }
         else {
          console.log("game end");  
          var colour = "red"       
        }
        
         push ();
         fill(colour);
         ellipse(this.x-15,this.y-50, 10,10);
         
         
         pop();
     }
    
}