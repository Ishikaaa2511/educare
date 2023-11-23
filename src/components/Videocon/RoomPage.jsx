import React from 'react';
import { useParams } from 'react-router';
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
  const{roomId} = useParams();

  const myMeeting = async (element) =>{
    const appID = 1234770188;
    const serverSecret= "98c0643ba3db601e4ef967d73f7ff258" ;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, 
      serverSecret , 
      roomId , 
      Date.now().toString(), 
      "Ishika Jain");

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http:http://localhost:3000/room/${roomId}`,
        }
      ],
      scenario:{
        mode: ZegoUIKitPrebuilt.OneONoneCall
      },
      showScreenShareButton: false,

    });
    
  };

  return <div>
    <div ref={myMeeting} />
    </div>;
}

export default RoomPage
