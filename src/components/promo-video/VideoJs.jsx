import React from 'react';
import { Player, ControlBar, PlayToggle, ReplayControl, ProgressControl } from 'video-react';

export const VideoPlayer = ({ src }) => {
    return (
        <div style={{ position: 'relative' }}>
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
            <Player
                videoId='myVideo'
                src={src}
                autoPlay={true}
                muted={true}
                height={'100%'}
            >
                <ControlBar autoHide={true} disableDefaultControls={true} className={'play-control'}>
                    <PlayToggle className={'play'} />
                    <ProgressControl />
                    <ReplayControl seconds={30} order={2.3} className={'replay'} />

                </ControlBar>
            </Player>
        </div>
    );
};