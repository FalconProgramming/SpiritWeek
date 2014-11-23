#pragma strict

var player : Transform;
var teacher : Transform;
var distance : float = 5;

function OnGUI () {

if (Vector3.Distance(player.position,teacher.position)<=distance) {
	 GUI.Box(Rect(0,Screen.height - 50,Screen.width,48),"asdfghjkl");

}
}