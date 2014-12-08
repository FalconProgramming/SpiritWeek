#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		if (Application.loadedLevelName == "College Day")
	Application.LoadLevel ("Level Clear Screen for College Day");
	
	if (Application.loadedLevelName == "costume day")
	Application.LoadLevel ("Level Clear Screen for Costume Day");
	
	if (Application.loadedLevelName == "red and blue day")
	Application.LoadLevel ("Level Clear Screen for Red and Blue Day");
	
	if (Application.loadedLevelName == "throw back day")
	Application.LoadLevel ("Level Clear Screen for Throw Back Day");
	
	if (Application.loadedLevelName == "NEON DAY")
	Application.LoadLevel ("Level Clear Screen for Neon Day");
	}
}