const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("#jsPlayButton");

console.log("jo");
console.log(videoContainer);
console.log(videoPlayer);
console.log(playBtn);

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}
