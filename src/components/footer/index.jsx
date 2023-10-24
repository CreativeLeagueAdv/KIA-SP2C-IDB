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
                <h4 className={styles.text}>{t('shareLinks')}</h4>
                <div className={styles.socialContainer}
                >

                    <img height={'32px'} width={'32px'} src='assets/social/Bookmark.svg' style={{ cursor: 'pointer' }} onClick={(e) => {

                    }} />

                    <EmailShareButton style={{ background: 'transparent' }} url={base}  >
                        <img height={'32px'} width={'32px'} src='assets/social/Email.svg' />
                    </EmailShareButton>

                    <img style={{ cursor: 'pointer' }} onClick={() => {
                        window.open('https://web.facebook.com/kiamotorsuae', '_blank')
                    }} height={'32px'} width={'32px'}  src='assets/social/face.svg' />
                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://twitter.com/KIAMotors_UAE', '_blank')
                    }} src='assets/social/XLogo.svg' style={{ cursor: 'pointer' }} />



                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://www.youtube.com/user/KiaUAE', '_blank')
                    }} src='assets/social/yotube.png' style={{ cursor: 'pointer' }} />


                    <img height={'32px'} width={'32px'} onClick={() => {
                        window.open('https://www.instagram.com/kiamotorsuae', '_blank')
                    }} src='assets/social/Instagram.svg' style={{ cursor: 'pointer' }} />


                </div>


                <div className={styles.copyRight}>
                    <img src='assets/logoWhite.png' width={'250px'} height={'63px'} />
                    <p className={styles.copyText}>{t('copy')}</p>
                </div>
            </div>

        </div>



    )
}