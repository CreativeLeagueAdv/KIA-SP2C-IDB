import { useEffect } from "react";
import { useRouter } from "next/router";
import { Viewer } from '@photo-sphere-viewer/core';
import styles from '../color-variants/styles/styles.module.css'
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
function AppView () {
    const { router } = useRouter()
    useEffect(() => {

        if (typeof window !== "undefined") {
            const viewer = new Viewer({
                container: document.querySelector('#viewer'),
                panorama: 'assets/360.webp',
                mousewheel: false
            });
        }
    }, [router])
    const {t}=useTranslation('common')
    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css" />
            </head>
            <Typography className={styles.vrText}>{t('AppView')}</Typography>
            <div id="viewer" className={styles.vr}>
            </div>


        </>


    );
}

export default AppView;







