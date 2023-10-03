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
            if (typeof window !=='undefined')
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
                    <img height={'32px'} width={'32px'} src='assets/social/Link.svg' style={{ cursor: 'pointer' }} onClick={() => {
                        navigator.clipboard.writeText(base);

                    }} />
                    <EmailShareButton style={{ background: 'transparent' }} url={base}  >
                        <img height={'32px'} width={'32px'} src='assets/social/Email.svg' />
                    </EmailShareButton>
                    <FacebookShareButton style={{ background: 'transparent' }} url={base} >

                        <img height={'32px'} width={'32px'} src='assets/social/face.svg' />
                    </FacebookShareButton>
                    <img height={'32px'} width={'32px'} src='assets/social/Instagram.svg' />
                    <TwitterShareButton style={{ background: 'transparent' }} url={base} >
                        <img height={'32px'} width={'32px'} src='assets/social/XLogo.svg' />
                    </TwitterShareButton>
                    <LinkedinShareButton style={{ background: 'transparent' }} url={base} >
                        <img height={'32px'} width={'32px'} src='assets/social/in.svg' />
                    </LinkedinShareButton>
                    <WhatsappShareButton style={{ background: 'transparent' }} url={base} >

                        <img height={'32px'} width={'32px'} src='assets/social/Whatsapp.svg' />
                    </WhatsappShareButton>

                </div>
               

                <div className={styles.copyRight}>
                    <img src='assets/logoWhite.png' width={'143px'} height={'43px'} />
                    <p className={styles.copyText}>{t('copy')}</p>
                </div>
            </div>

        </div>



    )
}