#pragma strict

var pencil : Texture2D;
var essay : Texture2D;
var font : Font;

function OnGUI () {
if (Bookbag.bookbag) {

	GUI.skin.font = font;

    GUI.Box (Rect (0,Screen.height - 50,100,50), GUIContent (InventoryManager.pencil.ToString(), pencil));
    
    GUI.Box (Rect (100,Screen.height - 50,100,50), GUIContent (InventoryManager.essay.ToString(), essay));
}
}