# WebRTC(Web RealTime ~)
- [SeolHun](https://github.com/seolhun)

- Core Keywords
	- MediaStream
	- PeerConnection
	- DataChannel

- Signal Server
	- Peer들의 접속 정보 수집

- Session Description Protocol(SDP)
	- Peer끼리 연결을 하기 위한 형식

- NAT(Network Address Translate)
	- ICE(Interactive Communication Establishment)
		- NAT가 없는 경우 네트워크를 통한 다이렉트 연결
		- STURN 연결
		- 마지막으로, TURN 연결
	- STUN Server(Session Teraversal Utilities)
	- Turn Server

## MediaStream
- 설정 방법
	- constraints

## PeerConnection
- RTCPeerConnection
	- ontract : 리모트 스트림 추적
	- addTrack : 
	- createOffer
	- setLocalDescription
	- setRemoteDescription
	- createAnswer

---
## 그 외 옵션
#### 옵션이 바뀌면 다시 SDP를 보내서 연결해야 한다.
- CSS Filter
	- webkit-filter : (css5)
- 화상선택
- 마이크 선택
- 스피커 선택
	- setSync
- 화상 끄기
- 음소거
	- remoteSpeeker에 소리를 끌 수 있다.
- 반전
- 화면 공유
	- Chrome API(화면 캡처링)
	- 