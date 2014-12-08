#pragma strict

function Start () {

	InventoryManager.pencil = 0;
	InventoryManager.essay = 0;
	Bookbag.bookbag = false;

	if (Application.loadedLevelName == "College Day")
	LevelSelect.lastLevelPlayed = 1;
	
	if (Application.loadedLevelName == "costume day")
	LevelSelect.lastLevelPlayed = 3;

	if (Application.loadedLevelName == "red and blue day")
	LevelSelect.lastLevelPlayed = 5;	
	
	if (Application.loadedLevelName == "throw back day")
	LevelSelect.lastLevelPlayed = 7;
	
	if (Application.loadedLevelName == "NEON DAY")
	LevelSelect.lastLevelPlayed = 9;
}