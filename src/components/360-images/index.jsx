import React from "react";
import dynamic from 'next/dynamic';

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
        <div id='pano360'>
            <ReactPhotoSphereViewer mousewheel={false}  zoomSpeed={0} onZoomChange={()=>{}} touchmoveTwoFingers={false} src="/assets/Sportage-GT-Interior-360.jpg" height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>

        </div>

    );
}

export default AppView;
