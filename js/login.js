
function login()
{
	var pass="123456";
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(password==pass){
		window.open("index.html",'_self');
	}else{
		alert("密码错误");
	}
}