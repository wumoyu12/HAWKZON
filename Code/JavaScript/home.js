//window.addEventListener("load",AddListener);
//window.addEventListener("load",BFunction);

//function AddListener()
//{
//	document.getElementById("Lcalculator").addEventListener("click",Links);
//	document.getElementById("Lsharpener").addEventListener("click",Link2);
//}

///function Links()
//{
//	localStorage.clear();
//	msg = "calculator";
//	localStorage.setItem("MSG",msg);	
//}

//function Link2()
//{
//	localStorage.clear();
//	msg = "sharpener";
//	localStorage.setItem("MSG",msg);	
//}

function AFunction(link)
{
	localStorage.clear();
	switch(link)
	{
		case "cal":
			msg = "calculator";
			break;
		case "sha":
			msg = "sharpener";
			break;
		default:
			return false;
	}
	localStorage.setItem("MSG",msg);	
}
