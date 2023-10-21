import React, { Component, useEffect, useState } from 'react';
import { useRef } from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

import { useRouter } from 'next/router';
export const ReactPlayer = ({ src, handleVideoEnd, controlHidden }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const { isReady } = useRouter();

    useEffect(() => {
        window?.document
            ?.getElementById("myVideo")
            ?.addEventListener("ended", () => {
                handleVideoEnd()
                setPlaying(false)
            }, false);
    }, [isReady]);
    useEffect(() => {
        if (videoRef) {
            videoHandler('play')
        }

    }, [videoRef])
    useEffect(() => {
        window.setInterval(function () {
            setCurrentTime(videoRef.current?.currentTime);
        }, 1000);
    }, [])
    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
        }
        else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.currentTime = 0
            setCurrentTime(0)
            videoRef.current.play();
        }

    };


    return (
        <>
            <video
                className="video"
                id='myVideo'
                width='100%'
                height='100vh'
                src={src}
                ref={videoRef}
                style={{ objectFit: 'cover' }}
                autoPlay={true}
                muted
                playsInline
            />

            {!controlHidden && <div className="controls">
                {!playing ? <PlayCircleFilledWhiteOutlinedIcon
                    onClick={() => videoHandler("play")}
                    className="controlsIcon--small"
                    alt=""

                /> : <PauseCircleOutlinedIcon onClick={() => videoHandler("pause")}
                    className="controlsIcon--small" />}
                <div className="time_progressbarContainer">
                    <div style={{ width: `${(currentTime / 8) * 100}%` }} className="time_progressBar"></div>
                </div>
                <RestartAltOutlinedIcon className="controlsIcon--small"
                    onClick={() => videoHandler("restart")} />

            </div>}
        </>
    )
}