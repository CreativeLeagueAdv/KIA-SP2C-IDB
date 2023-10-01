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
            if (window)
                return window.location.href
        }
    }, [router.isReady])

    return (

        <div id='footer' className={styles.footerContainer}>

            <div className={styles.imageContainer} >
                <h4 className={styles.text}>Share The new Seltos Interactive Brochure Experience</h4>
                <div className={styles.socialContainer}
                >

                    <img height={'32px'} width={'32px'} src='assets/social/Bookmark.svg' style={{ cursor: 'pointer' }} onClick={(e) => {

                    }} />
                    <img height={'32px'} width={'32px'} src='assets/social/Link.svg' style={{cursor:'pointer'}} onClick={() => {
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
                {/* <Stack className={styles.imageBoxContainer} direction={{ xl: 'row', lg: 'row', md: 'row', xs: 'column', sm: 'column' }}>
                    <div className={styles.imageBox}>
                        <img src='assets/testDrive.webp' className={styles.image} />
                        <p className={styles.imageText}>Experience The new Seltos For Yourself
                        </p>
                        <Button startIcon={<img src='assets/wheel.svg' style={{ marginLeft: '4px ' }} />} variant='outlined' sx={{ color: '#05141F' }} className={classes.button} >Test Drive</Button>
                    </div>
                    <div className={styles.imageBox}>
                        <img src='assets/locations.webp' className={styles.image} />
                        <p className={styles.imageText} >Find The Nearest Dealer To You
                        </p>
                        <Button startIcon={<img src='assets/location.svg' style={{ marginLeft: '4px ' }} />} variant='outlined' className={classes.button} >Locations</Button>

                    </div>

                </Stack> */}

                <div className={styles.copyRight}>
                    <img src='assets/logoWhite.png' width={'143px'} height={'33px'} />
                    <p className={styles.copyText}>COPYRIGHT(C) 2023 KIA CORPORATION. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

        </div>



    )
}