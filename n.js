navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
	var pc = new RTCPeerConnection({
		iceServers: [{
			urls: "stun:stun.l.google.com:17389"
		}]
	});
	for (var i of stream.getVideoTracks()) pc.addTrack(i);
	var offer = pc.createOffer({
		offerToReceiveVideo: true,
		offerToReceiveAudio: true,
		iceRestart: true
	});
	pc.ontrack = (e) => {
		document.querySelector("video").srcObject = e.streams[0];
	}
	pc.onicecandidate = (event) => {
		if (event.candidate) {
			pc.setRemoteDescription(event.candidate)
		}
	}
});
var pc = new RTCPee