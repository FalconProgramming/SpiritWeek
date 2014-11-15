#pragma strict

var playerObject = GameObject.Find("Hero");
var playerPos:Vector3 = playerObject.transform.position;

function Update () {

}


function OnGUI () {
    if (GUI.Button (Rect (10,70, 100, 20), "Player's position")) {
        print ("text");
    }
    GUI.Box (Rect (10,10,150,20), "This is a text box.");

}