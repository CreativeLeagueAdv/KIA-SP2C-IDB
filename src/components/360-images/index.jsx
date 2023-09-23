import React from "react";
import dynamic from 'next/dynamic';
import { Typography } from "@mui/material";

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
    const pSRef = React.createRef();
    const handleClick = (data) => {
        console.log(data);
    };

    return (
        <div style={{ position: 'relative' }}>
            <Typography sx={{ position: 'absolute', top: '60px', fontSize: { sm: '18px', xs: '18px', lg: '36px ', xl: '36px ', }, textShadow: '0px 0px 20px rgba(0, 0, 0, 0.64) !important', color: '#fff', zIndex: 1000, width: '100%', textAlign: 'center' }}>360VR Interior</Typography>
            <div id='pano360'>
                <ReactPhotoSphereViewer mousewheel={false} zoomSpeed={0} onZoomChange={() => { }} touchmoveTwoFingers={false} src="/assets/Sportage-GT-Interior-360.jpg" height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>

            </div>
        </div>

    );
}

export default AppView;
