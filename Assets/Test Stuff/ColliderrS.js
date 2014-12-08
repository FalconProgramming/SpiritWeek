#pragma strict
var breaking : KeyCode;
function Update () 
{
if (Input.GetKey(breaking))
	{
		Destroy(gameObject);
	};
}