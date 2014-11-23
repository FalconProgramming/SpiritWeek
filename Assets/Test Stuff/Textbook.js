#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		InventoryManager.textbook = InventoryManager.textbook + 1f;
		Destroy(gameObject);
}
}