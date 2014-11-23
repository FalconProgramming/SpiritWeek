#pragma strict

var Player : Rigidbody2D;
var soundFile : AudioClip;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		Movement.speed = Movement.speed + 5f;
		audio.clip = soundFile;
		audio.Play();
		yield WaitForSeconds (audio.clip.length);
		Movement.speed = Movement.speed - 5f;
		Destroy(gameObject);
}
}