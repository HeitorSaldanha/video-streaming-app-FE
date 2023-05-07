'use client';
import React from 'react';
import {
  useHMSStore,
  selectHLSState,
  selectLocalPeer,
  useHMSActions,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
} from '@100mslive/react-sdk';
import { Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Controls: React.FC = () => {
  const hmsActions = useHMSActions();
  const hlsState = useHMSStore(selectHLSState);
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const localPeer = useHMSStore(selectLocalPeer);
  const startHLSStreaming = async () => {
    try {
      await hmsActions.startHLSStreaming();
    } catch (err) {
      alert(`failed to start hls ${err}`);
    }
  };

  const stopHLSStreaming = async () => {
    try {
      await hmsActions.stopHLSStreaming();
    } catch (err) {
      alert(`failed to stop hls ${err}`);
    }
  };

  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!audioEnabled);
  };

  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!videoEnabled);
  };

  const leaveRoom = async () => {
    if (localPeer?.roleName === 'broadcaster') {
      hmsActions.leave();
      await hmsActions.stopHLSStreaming();
    } else {
      hmsActions.leave();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-1 p-2">
      {localPeer?.roleName === 'broadcaster' ? (
        <>
          <Button onClick={toggleAudio}>
            {audioEnabled ? (
              <FontAwesomeIcon icon="microphone-lines" />
            ) : (
              <FontAwesomeIcon icon="microphone-lines-slash" />
            )}
          </Button>
          <Button onClick={toggleVideo}>
            {videoEnabled ? (
              <FontAwesomeIcon icon="video" />
            ) : (
              <FontAwesomeIcon icon="video-slash" />
            )}
          </Button>
          <Button onClick={leaveRoom}>
            <FontAwesomeIcon icon="door-open" /> Leave Room
          </Button>
          {hlsState.running ? (
            <Button onClick={stopHLSStreaming}>
              <FontAwesomeIcon icon="eye-slash" /> Stop Streaming
            </Button>
          ) : (
            <Button onClick={startHLSStreaming}>
              <FontAwesomeIcon icon="eye" />
              Go Live!
            </Button>
          )}
        </>
      ) : (
        <Button onClick={leaveRoom}>
          <FontAwesomeIcon icon="door-open" /> Leave Room
        </Button>
      )}
    </div>
  );
};
