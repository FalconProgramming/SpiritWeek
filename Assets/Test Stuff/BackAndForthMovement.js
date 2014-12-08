#pragma strict

var speed : float = 5;
var timeset : float;
var timer : float = timeset;

function FixedUpdate ()
{
	
	timer -= Time.deltaTime;
	rigidbody2D.velocity.x = speed;
	if(timer <= 0)
	
	{
		
		speed = -speed;
		timer = timeset;
		
	}
};
