﻿#pragma strict
var speed : float = 5;
var timer : float = 3;
function Update ()
{
	timer -= Time.deltaTime;
	rigidbody2D.velocity.x = speed;
	if(timer <= 0)
	{
		speed = -speed;
		timer = 3;
	}
};