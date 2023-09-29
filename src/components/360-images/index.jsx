import React, { useEffect, useMemo } from "react";
import dynamic from 'next/dynamic';
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
const ReactPhotoSphereViewer = dynamic(
    () =>
        import('react-photo-sphere-viewer').then(
            (mod) => mod.ReactPhotoSphereViewer
        ),
    {
        ssr: false,
    }
);


function AppView () {
    const router = useRouter()

    useEffect(() => {
        if (window) {
            window.CI360.init();
        }
    }, [router])

    return (
        <>
            <div
                class="cloudimage-360"
                style={{ width: '100%', height: '70vh' }}
                id="gurkha-suv"
                data-folder="assets/"
                data-filename-x="Sportage-GT-Interior-360.jpg"
                data-amount-x="100"
                data-amount-y="100"
                data-autoplay={true}
                data-ratio="2"
            >
            </div>
            <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js"></script>



        </>

    )
}




export default AppView;
