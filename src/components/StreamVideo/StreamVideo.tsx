'use client';
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import {
  useHMSStore,
  selectHLSState,
  selectPeers,
  selectLocalPeer,
  useVideo,
  HMSPeer,
} from '@100mslive/react-sdk';
import { Controls } from './Controls';

const VideoTile: React.FC<{ peer: HMSPeer }> = ({ peer }) => {
  const { videoRef } = useVideo({ trackId: peer.videoTrack });
  return <video ref={videoRef} className="w-full" autoPlay muted playsInline />;
};

const ViewerView = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsState = useHMSStore(selectHLSState);
  const hlsUrl = hlsState.variants[0]?.url;

  useEffect(() => {
    if (videoRef.current && hlsUrl) {
      const browserHasNativeHLSSupport = videoRef.current.canPlayType(
        'application/vnd.apple.mpegurl'
      );
      if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
      } else if (browserHasNativeHLSSupport) {
        videoRef.current.src = hlsUrl;
      }
    }
  }, [hlsUrl]);

  return <video ref={videoRef} autoPlay controls></video>;
};

export const StreamVideo = () => {
  const peers = useHMSStore(selectPeers);
  const localPeer = useHMSStore(selectLocalPeer);
  return (
    <>
      {localPeer?.roleName === 'broadcaster' ? (
        peers
          .filter((peer) => peer.roleName === 'broadcaster')
          .map((peer) => <VideoTile key={peer.id} peer={peer} />)
      ) : (
        <ViewerView />
      )}
      <Controls />
    </>
  );
};
