import styles from './styles.module.css'
import { makeStyles } from '@mui/styles';

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,



} from "react-share";
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
const useStyles = makeStyles({

    button: {
        color: '#05141F !important',
        padding: '15px 25px',
        fontSize: '16px',
        backgroundColor: '#fff',

        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#fff',
            color: '#fff !important',
        },
    }
})
export default function Footer (params) {
    const classes = useStyles()
    const router = useRouter()
    let base = useMemo(() => {
        if (router.isReady) {
            if (typeof window !== 'undefined')
                return window.location.href
        }
    }, [router.isReady])
    const { t } = useTranslation("common");

    return (

        <div id='Summary' className={styles.footerContainer}>

            <div className={styles.imageContainer} >
                <div className={styles.socialContainer}
                >

                    <img height={'32px'} width={'32px'} src='assets/social/Bookmark.svg' style={{ cursor: 'pointer' }} onClick={(e) => {

                    }} />

                    <EmailShareButton style={{ background: 'transparent', height: '32px' }} url={base}  >
                        <img height={'32px'} width={'32px'} src='assets/social/Email.svg' />
                    </EmailShareButton>
                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://www.linkedin.com/company/kia-middle-east-africa/', '_blank')
                    }} src='assets/social/in.svg' style={{ cursor: 'pointer' }} />

                    <img style={{ cursor: 'pointer' }} onClick={() => {
                        window.open('https://www.facebook.com/KIAMiddleEastandAfrica', '_blank')
                    }} height={'32px'} width={'32px'} src='assets/social/face.svg' />
                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://twitter.com/KIA__MEA', '_blank')
                    }} src='assets/social/XLogo.svg' style={{ cursor: 'pointer' }} />



                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://www.youtube.com/channel/UClAYWjFznLNw3saZHA5OkNw', '_blank')
                    }} src='assets/social/yotube.png' style={{ cursor: 'pointer' }} />


                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://www.instagram.com/kia_mea/', '_blank')
                    }} src='assets/social/Instagram.svg' style={{ cursor: 'pointer' }} />
                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://www.snapchat.com/add/kia-mea', '_blank')
                    }} src='assets/social/snap.png' style={{ cursor: 'pointer' }} />
                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://www.tiktok.com/@kia.mea', '_blank')
                    }} src='assets/social/tiktok.png' style={{ cursor: 'pointer' }} />

                </div>
               
                <div className={styles.copyRight}>
                    <img src='assets/logoWhite.png' width={'250px'} height={'63px'} />
                    <button onClick={(() => {
                        window.open('https://worldwide.kia.com/int/kia-global-websites', '_blank')
                    })} style={{ padding: '1rem',marginTop:'20px', border: '1px solid #fff', background: 'transparent', borderRadius: '8px', color: '#fff', cursor: 'pointer' }}>
                        {t('share')}
                    </button>
                    <p className={styles.copyText}>{t('copy')}</p>
                </div>

            </div>

        </div>



    )
}