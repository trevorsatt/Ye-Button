var audio = new Audio();
var playlist = ["sound/song1.mp3", "sound/song2.mp3", "sound/song3.mp3","sound/song4.mp3","sound/song5.mp3", "sound/song6.mp3"];

console.log($);

$(document).ready(function() {
  $(".btn").click(function(){
 	var songNum = Math.floor(Math.random() * 5) + 0;
 	console.log(songNum);
 	audio.src = playlist[songNum];
	audio.play();
  });
});
