#pragma strict
static var timer : float;
function Start ()
{
	if (Application.loadedLevelName == "College Day")
	timer = 30f;
	
	if (Application.loadedLevelName == "costume day")
	timer = 30f;
	
	if (Application.loadedLevelName == "red and blue day")
	timer = 70f;
	
	if (Application.loadedLevelName == "throw back day")
	timer = 45f;
	
	if (Application.loadedLevelName == "NEON DAY")
	timer = 25f;
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
