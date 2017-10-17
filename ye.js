var audio = new Audio();
var playlist = ["sound/song1.mp3", "sound/song2.mp3", "sound/song3.mp3","sound/song4.mp3","sound/song5.mp3","sound/song6.mp3","sound/song7.mp3","sound/song8.mp3"];


var lastSong = 100;
$(document).ready(function() {
  $(".butn").click(function(){
	
	var choice = GetSong(lastSong);

 	console.log(choice);
 	audio.src = playlist[choice];
	audio.play();
  });
});

function GetSong(last){
	var songNum = Math.floor(Math.random() * 8) + 0;

 	if(last !== songNum && typeof songNum !== undefined){
		lastSong = songNum;

		return songNum;
 	} 
 	else {
 		GetSong(lastSong);
 	}
}

var audio = new Audio();
var playlist = ["sound/song1.mp3", "sound/song2.mp3", "sound/song3.mp3","sound/song4.mp3","sound/song5.mp3","sound/song6.mp3","sound/song7.mp3","sound/song8.mp3"];


var lastSong = 100;
$(document).ready(function() {
  $(".btn").click(function(){
	
	var choice = GetSong(lastSong);

 	console.log(choice);
 	audio.src = playlist[choice];
	audio.play();
  });
});

function GetSong(last){
	var songNum = Math.floor(Math.random() * 8) + 0;

 	if(last !== songNum && typeof songNum !== undefined){
		lastSong = songNum;

		return songNum;
 	} 
 	else {
 		GetSong(lastSong);
 	}
}
