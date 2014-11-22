#pragma strict

function OnGUI () {

GUI.Box (Rect(Screen.width/2-50,120,155,30), "Number of pencils: " + InventoryManager.pencil);
GUI.Box (Rect(Screen.width/2-50,160,155,30), "Number of rulers: " + InventoryManager.ruler);
GUI.Box (Rect(Screen.width/2-50,200,155,30), "Number of textbooks: " + InventoryManager.textbook);

if (InventoryManager.pencil <= 3 && InventoryManager.ruler <= 2 && InventoryManager.textbook <= 1) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: F");
}

else if (InventoryManager.pencil <= 0 || InventoryManager.ruler <= 0 || InventoryManager.textbook <= 0) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: F");
}

else if (InventoryManager.pencil <= 5 || InventoryManager.ruler <= 4 || InventoryManager.textbook <=2) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: D");
}

else if (InventoryManager.pencil <= 7 || InventoryManager.ruler <= 5 || InventoryManager.textbook <= 3) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: C");
}

else if (InventoryManager.pencil <= 9 || InventoryManager.ruler <= 6 || InventoryManager.textbook <= 4) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: B");
}

else if (InventoryManager.pencil <= 10 || InventoryManager.ruler <= 7 || InventoryManager.textbook <= 5) {
GUI.Box (Rect(Screen.width/2-50,250,155,30), "Grade: A");
}

if (GUI.Button (Rect(Screen.width/2+30,300,155,30), "Next Level")) {
InventoryManager.pencil = 0;
InventoryManager.ruler = 0;
InventoryManager.textbook = 0;
Application.LoadLevel(LevelSelect.lastLevelPlayed + 1);
}

if (GUI.Button (Rect(Screen.width/2-130,300,155,30), "Title Screen")) {
InventoryManager.pencil = 0;
InventoryManager.ruler = 0;
InventoryManager.textbook = 0;
Application.LoadLevel("Title Screen");
}

}