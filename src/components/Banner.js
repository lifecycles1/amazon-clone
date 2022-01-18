import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
          <img loading="lazy" src="https://i.imgur.com/Z89Vcd6.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
