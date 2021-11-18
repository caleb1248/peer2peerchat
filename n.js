var connection = new RTCPeerConnection();
var channel = connection.createDataChannel("sus");
navigator.mediaDevices.getUserMedia({video:true}).then(m => {
    m.getVideoTracks().forEach(track => {
        connection.addTrack(track);
    })
})