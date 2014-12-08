#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		LevelSelect.lastLevelPlayed += 1;
		Application.LoadLevel (LevelSelect.lastLevelPlayed);
	}
}