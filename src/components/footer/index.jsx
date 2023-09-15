import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Button, Stack } from '@mui/material';
export default function Footer (params) {


    return (
            
            <div style={{
                height: '92vh', background: '#05141f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'
        }}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center'}} >

                <h4 style={{ color: '#fff' }}>SHARE SPORTAGE DIGITAL BROCHURE</h4>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}
                >

                    <img height={'32px'} width={'32px'} src='/assets/social/facebook.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/twitter.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/linkedin.svg' />
                    <img height={'32px'} width={'32px'} src='/assets/social/whatsapp.png' />

                </div>
                <Stack style={{ display: 'flex', alignItems: 'center', gap: '24px' }} direction= {{ xl: 'row', lg: 'row', md: 'row' ,xs:'column',sm:'column'}}>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <img src='http://cladv.net/wp-content/uploads/2023/08/Sportage-Test-Drive-Box.webp' width={'460px'} height={'230px'} />
                        <p style={{ fontSize: '22px', color: '#fff' }}>EXPERIENCE A SPORTAGE FOR YOURSELF
                        </p>
                        <Button variant='outlined' sx={{ color: 'white', borderColor: '#fff', padding: '15px', fontSize: '16px' }} >Test Drive</Button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <img src='http://cladv.net/wp-content/uploads/2023/08/Kia-Showroom.webp' width={'460px'} height={'230px'} />
                        <p style={{ fontSize: '22px', color: '#fff' }}>FIND THE NEAREST DEALER TO YOU
                        </p>
                        <Button variant='outlined' sx={{ color: 'white', borderColor: '#fff', padding: '15px', fontSize: '16px' }} >Locations</Button>

                    </div>
                  
                </Stack>
              
            </div>
                <div>
                    <img src='/assets/logoWhite.png' width={'143px'} height={'33px'} />
                    <p style={{ marginTop: '16px', color: 'gray' }}>Copyright © 2023 Kia</p>
                </div>

            </div>
         

       
    )
}