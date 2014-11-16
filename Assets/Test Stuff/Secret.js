#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		InventoryManager.secret = InventoryManager.secret + 1f;
		Destroy(gameObject);
		print(InventoryManager.secret);
}
}