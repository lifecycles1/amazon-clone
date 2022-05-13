import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-black z-20 bottom-0" />
      <div className="absolute w-full h-32 bg-gradient-to-t from-white z-20 bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://i.imgur.com/FpK9bPB.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://i.imgur.com/kwGTwo7.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://i.imgur.com/hQk2Esi.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://i.imgur.com/ZKdtK8y.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://i.imgur.com/kf3pSs8.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
