#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
		InventoryManager.pencil = InventoryManager.pencil + 1f;
		Destroy(gameObject);
		print(InventoryManager.pencil);
}
}