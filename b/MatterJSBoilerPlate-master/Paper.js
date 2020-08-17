class Paper {
    constructor(x,y,radius){
     var options ={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }

      this.Body=Bodies.circle(x, y,radius , options)
      this.radius=radius
      World.add(world,this.Body);

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.Body.position.x,this.Body.position.y,this.radius)
        push()
        fill("pink")
        pop()
    }
}