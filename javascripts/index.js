document.getElementById("gramophon").addEventListener("click", playAudio);

function playAudio() { 
    var sound = document.getElementById("sound"); 
    document.log(sound);
    sound.play(); 
} 


$('.watch-video').click(function() { $('#full-page-video').fadeIn(); });
$('.close-full-page-video').click(function() {
var $frame = $('#full-page-video iframe');
// saves the current iframe source
var vidsrc = $frame.attr('src');
// sets the source to nothing, stopping the video
$frame.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
$frame.attr('src', vidsrc);
$('#full-page-video').fadeOut();
});
