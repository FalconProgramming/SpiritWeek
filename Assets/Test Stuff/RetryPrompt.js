#pragma strict

function OnGUI () {

GUI.Box (Rect(Screen.width/2-50,315,100,30), "Retry?");

if(GUI.Button (Rect(Screen.width/2-65,350,50,30), "Yes")) {

	Application.LoadLevel(LevelSelect.lastLevelPlayed);
	
}

if(GUI.Button (Rect(Screen.width/2+15,350,50,30) ,"No")) {

	Application.LoadLevel("Title Screen");
	
}
}