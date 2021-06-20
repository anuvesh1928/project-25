class paper 
{
constructor(x,y,r)
{

	var options=
	{
		isStatic:false,
		'restituition':0.5,
		'friction':0.8,
		'density':1.2
	}
	this.x=x;
	this.y=y;
	this.radius=r;

	this.image=loadImage("paper.png");
 
	this.body=Bodies.circle(this.x,this.y,20,options);
    World.add(world,this.body);
}

display()
{
	var paperPos =this.body.position;

	push();
	translate(paperPos.x, paperPos.y);
    rectMode(CENTER);
    imageMode(CENTER);
	image(this.image, 0,0,80,80);
	pop();


}

}