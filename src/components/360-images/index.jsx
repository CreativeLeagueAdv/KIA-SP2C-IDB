import React, { useEffect, useMemo } from "react";
import dynamic from 'next/dynamic';
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Viewer } from '@photo-sphere-viewer/core';

function AppView () {
    const { router } = useRouter()
    useEffect(() => {

        if (typeof window !== "undefined") {
            const viewer = new Viewer({
                container: document.querySelector('#viewer'),
                panorama: 'assets/360.png',
                mousewheel: false
            });
        }
    }, [router])
    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css" />
            </head>
          
            <div id="viewer" style={{ width: '100%', height: '100vh' }}>
            </div>


        </>


    );
}

export default AppView;







