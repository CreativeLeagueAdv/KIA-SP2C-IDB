import {
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
export default function Footer (params) {
    
    return (
        <div style={{ height: '90vh', background: '#000',display:'flex',alignItems:'center',justifyContent:'center' }}>
            <h4 style={{ color: '#fff' }}>SHARE SPORTAGE DIGITAL BROCHURE</h4>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
                <LineShareButton/>
                <FacebookShareButton />
                <TwitterShareButton />
                <LinkedinShareButton />
                <WhatsappShareButton/>
            </div>
            
        </div>
    )
}