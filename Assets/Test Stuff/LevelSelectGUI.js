#pragma strict

function OnGUI () {

if(GUI.Button (Rect(Screen.width/2-25,100,75,30), "Level 1 - College Day")) {

	Application.LoadLevel("College Day (1)");
	
	}
}	