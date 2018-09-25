document.getElementById('ufo').addEventListener("click",get_hide_ufo_menu,false);
document.getElementById('gramofon').addEventListener("click",playAudio,false);
var isPlaying = false;
var myAudio = document.getElementById("sound");

function playAudio() { 
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
} 

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};




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



function hover(element, source) {
  element.setAttribute('src', source);
}

function unhover(element, source) {
  element.setAttribute('src', source);
}


