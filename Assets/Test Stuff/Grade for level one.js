#pragma strict

var Grade = new Array ("F", "D", "C", "B", "A", "A+", "A++", "A+++");
var Grape : float;

function OnGUI () {

GUI.Box (Rect(Screen.width/2-90,120,185,30), "Number of pencils: " + InventoryManager.pencil);
GUI.Box (Rect(Screen.width/2-90,180,185,30), "Number of papers: " + InventoryManager.essay);

if (InventoryManager.pencil <= 0 && InventoryManager.essay <= 0) {

	GUI.Box (Rect(Screen.width/2-75,240,155,30), "Grade: " + Grade[0].ToString());
	Grape = 0f;

}

else if (InventoryManager.pencil <= 0 || InventoryManager.essay <= 0) {

	GUI.Box (Rect(Screen.width/2-75,240,155,30), "Grade: " + Grade[2].ToString());
	Grape = 2f;
}

else if (InventoryManager.pencil <= 1 && InventoryManager.essay <= 1) {

	GUI.Box (Rect(Screen.width/2-75,240,155,30), "Grade: " + Grade[3].ToString());
	Grape = 4f;
}

else if (InventoryManager.pencil <= 2 && InventoryManager.essay <= 2) {

	GUI.Box (Rect(Screen.width/2-75,240,155,30), "Grade: " + Grade[4].ToString());
	Grape = 3f;
}

else if (InventoryManager.secret == 1) {

	GUI.Box (Rect(Screen.width/2-75,240,155,30), "Grade: " + Grade[5].ToString());
	Grape = 5f;
}

else if (InventoryManager.secret == 2) {

	GUI.Box (Rect(Screen.width/2-75,240,155,30), "Grade: " + Grade[6].ToString());
	Grape = 6f;
}

if (TimerGUI.timer >= 10f && (InventoryManager.pencil <= 0 && InventoryManager.essay <= 0)) {

	GUI.Box (Rect(Screen.width/2-110,300,225,30), "Time bonus! New Grade: " + Grade[1].ToString());
	
}

else if (TimerGUI.timer >= 10f && (InventoryManager.pencil <= 0 || InventoryManager.essay <= 0)) {

	GUI.Box (Rect(Screen.width/2-110,300,225,30), "Time bonus! New Grade: " + Grade[3].ToString());
	
}

else if (TimerGUI.timer >= 10f && (InventoryManager.pencil <= 1 && InventoryManager.essay <= 1)) {

	GUI.Box (Rect(Screen.width/2-110,300,225,30), "Time bonus! New Grade: " + Grade[4].ToString());
	
}

else if (TimerGUI.timer >= 10f && (InventoryManager.pencil <= 2 && InventoryManager.essay <= 2)) {

	GUI.Box (Rect(Screen.width/2-110,300,225,30), "Time bonus! New Grade: " + Grade[5].ToString());
	
}

else if (TimerGUI.timer >= 10f && InventoryManager.secret <= 1) {

	GUI.Box (Rect(Screen.width/2-110,300,225,30), "Time bonus! New Grade: " + Grade[6].ToString());
	
}

else if (TimerGUI.timer >= 10f && InventoryManager.secret <= 2) {

	GUI.Box (Rect(Screen.width/2-110,300,25,30), "Time bonus! New Grade: " + Grade[7].ToString());
	
}

}