#pragma strict
var timer : float;
function Update ()
{
	timer -= Time.deltaTime; 
};

function OnGUI()
{
	GUI.Box (Rect (20,10,60,25), GUIContent (timer.ToString("0")));
};
