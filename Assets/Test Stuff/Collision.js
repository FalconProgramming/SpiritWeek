#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		collision.rigidbody2D.velocity = Vector2.zero;
		if (Bookbag.bookbag) {
		if (InventoryManager.pencil > 0 && InventoryManager.essay > 0) {
		InventoryManager.pencil -= 1;
		InventoryManager.essay -= 1;
		}
		else if (InventoryManager.pencil > 0f) {
		InventoryManager.pencil -= 1f;
		}
		else if (InventoryManager.essay > 0f) {
		InventoryManager.essay -= 1f;
		}
		else if (InventoryManager.pencil <= 0 && InventoryManager.essay <= 0) {
		Bookbag.bookbag = false;
		InventoryManager.pencil = 0;
		InventoryManager.essay = 0;
		Application.LoadLevel ("Game Over");
		}
		}
		else {
		Application.LoadLevel ("Game Over");
}
}
}