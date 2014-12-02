#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		collision.rigidbody2D.velocity = Vector2.zero;
		if (Bookbag.bookbag) {
		if (InventoryManager.pencil > 0f && InventoryManager.essay > 0f) {
		InventoryManager.pencil -= 1f;
		InventoryManager.essay -= 1f;
		}
		else if (InventoryManager.pencil > 0f) {
		InventoryManager.pencil -= 1f;
		}
		else if (InventoryManager.essay > 0f) {
		InventoryManager.essay -= 1f;
		}
		else if (InventoryManager.pencil <= 0f && InventoryManager.essay <= 0f) {
		Bookbag.bookbag = false;
		InventoryManager.pencil = 0f;
		InventoryManager.essay = 0f;
		Application.LoadLevel ("Game Over");
		}
		}
		else {
		Application.LoadLevel ("Game Over");
}
}
}