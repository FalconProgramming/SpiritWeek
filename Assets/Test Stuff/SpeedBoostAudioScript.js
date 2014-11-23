#pragma strict

var Player : Rigidbody2D;
var soundFile : AudioClip;
var speedBoostAudioScript: Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		Movement.speed = Movement.speed + 5f;
		audio.clip = soundFile;
		audio.Play();
		speedBoostAudioScript.position = Vector2(100, 100);
		yield WaitForSeconds (audio.clip.length);
		Movement.speed = Movement.speed - 5f;
}
}