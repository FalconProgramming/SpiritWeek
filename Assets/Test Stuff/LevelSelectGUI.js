#pragma strict

function OnGUI () {

if(GUI.Button (Rect(Screen.width/2-25,100,75,30), "Level 1")) {

	Application.LoadLevel("Level 1");
	
}

if(GUI.Button (Rect(Screen.width/2-25,140,75,30) ,"Level 2")) {

	Application.LoadLevel("Level 2");
	
}	
	
if(GUI.Button (Rect(Screen.width/2-25,180,75,30), "Level 3")) {

	Application.LoadLevel("Level 3");
	
}

if(GUI.Button (Rect(Screen.width/2-25,220,75,30) ,"Level 4")) {

	Application.LoadLevel("Level 4");

}

if(GUI.Button (Rect(Screen.width/2-25,260,75,30) ,"Level 5")) {

	Application.LoadLevel("Level 5");

}	

if(GUI.Button (Rect(Screen.width/2-25,300,75,30) ,"Test Level")) {

	Application.LoadLevel("Test Scene");

}							
}