function get_hide_ufo_menu (){
		console.log('in the hide function')
		document.getElementById("navbar").style.display = "flex";
		
		var x = 500;
		for (let i = 0; i < 3; i++) {
			setTimeout(function(){
				document.getElementsByClassName("nav_a")[i].style.display = "block";
			}, x);
			x += 1000;
		}
}
		

//js for the navbar
document.getElementById('ufo').addEventListener("click",get_hide_ufo_menu,false);

//an image cannot have a focus, that's why "blur" isn't working in this case!
//document.getElementById('navbar').addEventListener("blur",function(){document.getElementById("navbar").style.display = "none"},true);

