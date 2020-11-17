var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function playVid() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function pauseVideo() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function slowVideo() {
	video.playbackRate = video.playbackRate / 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function speedVideo() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function skipVideo() {
	if(video.duration - video.currentTime > 5){
		video.currentTime += 5;
	}
	else{
		video.currentTime = 0;
		console.log(video.currentTime);
		video.play()
	}
});

document.querySelector("#mute").addEventListener("click", function muteVideo() {
	if(video.muted === false){
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function volumeSlide() {
	console.log(this.value);
	document.querySelector("#volume").innerHTML = volumeSlider.value;
	var newVol = volumeSlider.value / 100;
	video.volume = newVol;
	document.querySelector("#volume").innerHTML = volumeSlider.value + '%';
});



document.querySelector("#old").addEventListener("click", function oldSchool() {
	console.log("Old School");
	video.classList.add("oldTime");

});

document.querySelector("#original").addEventListener("click", function original() {
	console.log("Original");
	video.classList.remove("oldTime");

});
