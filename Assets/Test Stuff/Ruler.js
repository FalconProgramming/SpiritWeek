#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		InventoryManager.ruler = InventoryManager.ruler + 1f;
		Destroy(gameObject);
		print(InventoryManager.ruler);
}
}