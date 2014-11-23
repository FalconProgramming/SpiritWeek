#pragma strict

static var bookbag : boolean;
var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		Bookbag.bookbag = true;
		Destroy(gameObject);
}
}