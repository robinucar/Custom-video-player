const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

// Play & pause video
const toggleVideoStatus = () => {
  video.paused ? video.play() : video.pause();
};

// Update play/pause icon
const updatePlayIcon = () => {
  video.paused
    ? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');
};

//Update progress & timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  //Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) mins = '0' + String(mins);

  // Get seconds

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) secs = '0' + String(secs);

  timestamp.innerHTML = `${mins}:${secs}`;
};

// Set video time to progress
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

// Stop Video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
