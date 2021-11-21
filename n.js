var pc = new RTCPeerConnection({
    iceServers : [{
        urls : "stun:stun.l.google.com:17569"
    }]
});
pc.addEventListener("icecandidate",function(e){
    if(e.candidate){
        s
    }
}