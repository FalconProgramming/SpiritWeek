﻿#pragma strict

var Player : Rigidbody2D;

function OnTriggerEnter2D (collision : Collider2D) {
	if (collision.tag == "Player") {
	if (Bookbag.bookbag) {
		InventoryManager.essay = InventoryManager.essay + 1f;
		Destroy(gameObject);
		}
}
}