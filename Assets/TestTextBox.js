#pragma strict

var player : Transform;
var teacher : Transform;
var distance : float = 5;

function OnGUI () {

if (Vector3.Distance(player.position,teacher.position)<=distance) {
	 GUI.Box(Rect(25,200,556,70),"asdfghjkl");

}
}