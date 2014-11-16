#pragma strict

var Player : Rigidbody2D;
var soundFile : AudioClip;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		audio.clip = soundFile;
		audio.Play();
		Movement.frozen = true;
		yield WaitForSeconds (audio.clip.length);
		Movement.frozen = false;
		Destroy(gameObject);
}
}