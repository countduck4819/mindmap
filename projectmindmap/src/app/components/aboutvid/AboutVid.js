"use client";
import React, { memo, useEffect, useRef, useState } from "react";

function AboutVid() {
    const videoRef = useRef();
    const [vid, setVid] = useState(false);
    useEffect(() => {
        videoRef.current.addEventListener("click", (e) => {
            if (vid) {
                e.target.pause();
                setVid(false);
            } else {
                e.target.play();
                setVid(true);
            }
        });
    });
    return (
        <>
            <div ref={videoRef} className="video-desc">
                <div className="box-video"></div>
                <video
                    autoPlay={false}
                    loop={true}
                    muted={false}
                    src={require("@/video/intro-video.mp4")}
                ></video>
            </div>
        </>
    );
}

export default memo(AboutVid);
