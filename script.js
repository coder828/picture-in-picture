let videoLoaded = document.getElementById("videoLoaded");

const videoElement = document.getElementById("video");
const startButton = document.getElementById("startButton");
const choosePictureButton = document.getElementById("choosePictureButton");

// Prompt user to select media stream
// pass that to video element
// play video

async function selectMediaStream() {
  try {
    videoLoaded.innerHTML = '<i class="fa fa-times"></i>';

    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };

    // once picture is chosen, show videoLoaded check mark
    videoLoaded.innerHTML = '<i class="fa fa-check"></i>';
  } catch (error) {
    console.log("selectMediaStream", error);
  }
}

// event listeners
startButton.addEventListener("click", async () => {
  // disable button
  startButton.disabled = true;

  // start picture in picture
  const requestReady = await videoElement.requestPictureInPicture();

  // reset button
  startButton.disabled = false;
});

choosePictureButton.addEventListener("click", () => {
  location.reload();
  return false;
});

// on load
selectMediaStream();
