#pragma strict

function OnGUI () {

GUI.Box (Rect(Screen.width/2-50,120,155,30), "Number of pencils: " + InventoryManager.pencil);
GUI.Box (Rect(Screen.width/2-50,160,155,30), "Number of papers: " + InventoryManager.essay);

if (InventoryManager.pencil <= 0 && InventoryManager.essay <= 0) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: F");
}

else if (InventoryManager.pencil <= 0 || InventoryManager.essay <= 0) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: C");
}

else if (InventoryManager.pencil <= 1 && InventoryManager.essay <= 1) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: A");
}

else if (InventoryManager.pencil <= 1 || InventoryManager.essay <= 1) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: B");
}

else if (InventoryManager.secret == 1) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: A+");
}

else if (InventoryManager.secret == 2) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: A++");
}

if (GUI.Button (Rect(Screen.width/2+30,300,155,30), "Next Level: Red and Blue Day")) {
InventoryManager.pencil = 0;
InventoryManager.essay = 0;
Application.LoadLevel(LevelSelect.lastLevelPlayed + 1);
}

if (GUI.Button (Rect(Screen.width/2-130,300,155,30), "Title Screen")) {
InventoryManager.pencil = 0;
InventoryManager.essay = 0;
Application.LoadLevel("Title Screen");
}

}