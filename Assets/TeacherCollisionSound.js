#pragma strict

var Teacher : Rigidbody2D;
var soundFile : AudioClip;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
	audio.clip = soundFile;
	audio.Play();
}
};