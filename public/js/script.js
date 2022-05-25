const mirror=document.getElementById("mirror")
const myVideo=document.createElement('video')
myVideo.muted = true
function addVideoStream(video, stream){
    video.srcObject = stream 
    video.addEventListener('loadedmetadata', () => { // Play the video as it loads
        video.play()
    })
    mirror.append(video)}


navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
    audio:true
}).then(stream=>{
    addVideoStream(myVideo,stream)
})