#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		collision.rigidbody2D.velocity = Vector2.zero;
		if (Bookbag.bookbag) {
		if (InventoryManager.pencil > 0f && InventoryManager.ruler > 0f && InventoryManager.textbook > 0f) {
		InventoryManager.pencil -= 1f;
		InventoryManager.ruler -= 1f;
		InventoryManager.textbook -= 1f;
		}
		else if (InventoryManager.pencil > 0f && InventoryManager.ruler > 0f) {
		InventoryManager.pencil -= 1f;
		InventoryManager.ruler -= 1f;
		}
		else if (InventoryManager.pencil > 0f && InventoryManager.textbook > 0f) {
		InventoryManager.pencil -= 1f;
		InventoryManager.textbook -= 1f;
		}
		else if (InventoryManager.ruler > 0f && InventoryManager.textbook > 0f) {
		InventoryManager.ruler -= 1f;
		InventoryManager.textbook -= 1f;
		}
		else if (InventoryManager.pencil > 0f) {
		InventoryManager.pencil -= 1f;
		}
		else if (InventoryManager.ruler > 0f) {
		InventoryManager.ruler -= 1f;
		}
		else if (InventoryManager.textbook > 0f) {
		InventoryManager.textbook -= 1f;
		}
		else if (InventoryManager.pencil <= 0f && InventoryManager.ruler <= 0f && InventoryManager.textbook <= 0f) {
		Bookbag.bookbag = false;
		InventoryManager.pencil = 5;
		InventoryManager.ruler = 1;
		InventoryManager.textbook = 2;
		Application.LoadLevel ("Game Over");
		}
		}
		else {
		Application.LoadLevel ("Game Over");
}
}
}