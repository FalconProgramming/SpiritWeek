﻿#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;

static var speed : float = 10;
static var frozen : boolean;

function Update () {

	if (frozen) {
	
		rigidbody2D.velocity.y = 0;
		rigidbody2D.velocity.x = 0;
		
	}
	
	else {
	
		if (Input.GetKey (moveUp)) {
	
			rigidbody2D.velocity.x = 0;
			rigidbody2D.velocity.y = speed;
		
	}
		else if (Input.GetKey (moveDown)) {
	
			rigidbody2D.velocity.x = 0;
			rigidbody2D.velocity.y = -speed;
		
	}
		else if (Input.GetKey (moveLeft)) {
	
			rigidbody2D.velocity.y = 0;
			rigidbody2D.velocity.x = -speed;
		
	}
		else if (Input.GetKey (moveRight)) {
	
			rigidbody2D.velocity.y = 0;
			rigidbody2D.velocity.x = speed;
		
	}
		else {

			rigidbody2D.velocity.y = 0;
			rigidbody2D.velocity.x = 0;

	}
}
}