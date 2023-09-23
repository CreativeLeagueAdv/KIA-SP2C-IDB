import { Button, Stack } from '@mui/material';
import styles from './styles.module.css'
import { makeStyles } from '@mui/styles';
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

    return (

        <div id='footer' className={styles.footerContainer}>
            <div className={styles.imageContainer} >

                <h4 className={styles.text}>Share The new Seltos Interactive Brochure Experience</h4>

                <div className={styles.socialContainer}
                >

                    <img height={'32px'} width={'32px'} src='/assets/social/Bookmark.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/Link.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/Email.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/Facebook.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/Instagram.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/XLogo.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/LinkedIn.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/Whatsapp.svg' />

                </div>
                <Stack className={styles.imageBoxContainer} direction={{ xl: 'row', lg: 'row', md: 'row', xs: 'column', sm: 'column' }}>
                    <div className={styles.imageBox}>
                        <img src='/assets/testDrive.webp' className={styles.image} />
                        <p className={styles.imageText}>Experience The new Seltos For Yourself
                        </p>
                        <Button startIcon={<img src='/assets/wheel.svg' />} variant='outlined' sx={{ color: '#05141F' }} className={classes.button} >Test Drive</Button>
                    </div>
                    <div className={styles.imageBox}>
                        <img src='/assets/locations.webp' className={styles.image} />
                        <p className={styles.imageText} >Find The Nearest Dealer To You
                        </p>
                        <Button startIcon={<img src='/assets/location.svg' />} variant='outlined' className={classes.button} >Locations</Button>

                    </div>

                </Stack>

            </div>
            <div className={styles.copyRight}>
                <img src='/assets/logoWhite.png' width={'143px'} height={'33px'} />
                <p className={styles.copyText}>COPYRIGHT(C) 2023 KIA CORPORATION. ALL RIGHTS RESERVED.</p>
            </div>

        </div>



    )
}