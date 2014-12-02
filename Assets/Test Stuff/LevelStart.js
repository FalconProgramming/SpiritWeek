#pragma strict

function Start () {

	InventoryManager.pencil = 0;
	InventoryManager.essay = 0;
	Bookbag.bookbag = false;

	if (Application.loadedLevelName == "College Day (1)")
	LevelSelect.lastLevelPlayed = 1;

	if (Application.loadedLevelName == "red and blue day")
	LevelSelect.lastLevelPlayed = 2;	
}