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
                <div className={styles.copyRight}>
                    <img src='assets/logoWhite.png' width={'143px'} height={'43px'} />
                    <p className={styles.copyText}>{t('copy')}</p>
                </div>
            </div>

        </div>



    )
}