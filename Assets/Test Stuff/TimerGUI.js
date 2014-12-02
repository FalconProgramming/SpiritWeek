﻿#pragma strict
static var timer : float;
function Start ()
{
	timer = 30f;
}

function Update ()
{
	timer -= Time.deltaTime; 
	if (timer <= 0) {
	Application.LoadLevel ("Game Over");
	}
}

function OnGUI()
{
	GUI.Box (Rect (20,10,60,25), GUIContent (timer.ToString("0")));
}
