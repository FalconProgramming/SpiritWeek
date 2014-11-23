#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		collision.rigidbody2D.velocity = Vector2.zero;
		if (InventoryManager.pencil > 0f && InventoryManager.ruler > 0f && InventoryManager.textbook > 0f) {
		InventoryManager.pencil = InventoryManager.pencil - 1f;
		InventoryManager.ruler = InventoryManager.ruler - 1f;
		InventoryManager.textbook = InventoryManager.textbook - 1f;
		}
}
}