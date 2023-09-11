export default function PromoVideo() {
  return (
    <div>
      <div>
        <video
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          id='myVideo'
          width='100%'
          height='100vh'
          autoPlay
          muted>
          <source src={"/assets/promoVideo.webm"} type='video/webm' />
        </video>
      </div>
    </div>
  );
}
