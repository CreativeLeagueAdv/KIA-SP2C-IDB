import { Button, Stack } from '@mui/material';
import styles from './styles.module.css'
export default function Footer (params) {


    return (

        <div className={styles.footerContainer}>
            <div className={styles.imageContainer} >

                <h4 style={{ color: '#fff' }}>SHARE SPORTAGE DIGITAL BROCHURE</h4>

                <div className={styles.socialContainer}
                >

                    <img height={'32px'} width={'32px'} src='/assets/social/facebook.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/twitter.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/linkedin.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/whatsapp.png' />

                </div>
                <Stack className={styles.imageBoxContainer} direction={{ xl: 'row', lg: 'row', md: 'row', xs: 'column', sm: 'column' }}>
                    <div className={styles.imageBox}>
                        <img src='http://cladv.net/wp-content/uploads/2023/08/Sportage-Test-Drive-Box.webp' className={styles.image} />
                        <p className={styles.imageText}>EXPERIENCE A SPORTAGE FOR YOURSELF
                        </p>
                        <Button variant='outlined' className={styles.button} >Test Drive</Button>
                    </div>
                    <div className={styles.imageBox}>
                        <img src='http://cladv.net/wp-content/uploads/2023/08/Kia-Showroom.webp' className={styles.image} />
                        <p className={styles.imageText} >FIND THE NEAREST DEALER TO YOU
                        </p>
                        <Button variant='outlined' className={styles.button} >Locations</Button>

                    </div>

                </Stack>

            </div>
            <div className={styles.copyRight}>
                <img src='/assets/logoWhite.png' width={'143px'} height={'33px'} />
                <p className={styles.copyText}>Copyright © 2023 Kia</p>
            </div>

        </div>



    )
}