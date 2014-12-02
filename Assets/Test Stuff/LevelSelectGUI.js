#pragma strict

function OnGUI () {

if(GUI.Button (Rect(Screen.width/2-75,120,150,30), "Level 1 - College Day")) {

	Application.LoadLevel("College Day (1)");
	
	}
}	