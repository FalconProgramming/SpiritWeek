#pragma strict

function OnGUI () {

GUI.Box (Rect(Screen.width/2-50,90,100,30), "Retry?");

if(GUI.Button (Rect(Screen.width/2-50,150,50,30), "Yes")) {

	Application.LoadLevel(LevelSelect.lastLevelPlayed);
	
}

if(GUI.Button (Rect(Screen.width/2,150,50,30) ,"No")) {

	Application.LoadLevel("Title Screen");
	
}
}