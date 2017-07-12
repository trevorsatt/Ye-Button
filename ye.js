var audio = new Audio();
var playlist = ["sound/song1.mp3", "sound/song2.mp3", "sound/song3.mp3","sound/song4.mp3","sound/song5.mp3", "sound/song6.mp3"];

console.log($);

$(document).ready(function() {
  $(".btn").click(function(){
 	var songNum = Math.floor(Math.random() * 6) + 0;
 	console.log(songNum);
 	audio.src = playlist[songNum];
	audio.play();
  });
});

// var audio = new Audio(),
//     i = 0;
// var playlist = new Array('http://www.w3schools.com/htmL/horse.mp3', 'http://demos.w3avenue.com/html5-unleashed-tips-tricks-and-techniques/demo-audio.mp3');

// audio.addEventListener('ended', function () {
//     i = ++i < playlist.length ? i : 0;
//     console.log(i)
//     audio.src = playlist[i];
//     audio.play();
// }, true);
// audio.volume = 0.3;
// audio.loop = false;
// audio.src = playlist[0];
// audio.play();