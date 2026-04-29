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
