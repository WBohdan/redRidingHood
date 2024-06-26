import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

import meme1 from "./memes/meme1.jpg";
import meme2 from "./memes/meme2.jpg";
import meme3 from "./memes/meme3.jpg";
import meme4 from "./memes/meme4.png";
import meme5 from "./memes/meme5.jpeg";
import meme6 from "./memes/meme6.jpeg";
import meme7 from "./memes/meme7.jpeg";
import meme8 from "./memes/meme8.jpeg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1323 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1322, min: 992 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 991, min: 570 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  xMobile: {
    breakpoint: { max: 569, min: 370 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  {
    url: meme1,
    creator: "@bb_cryptoPro_clyton"
  },
  {
    url: meme2
  },
  {
    url: meme3
  },
  {
    url: meme4
  },
  {
    url: meme5,
    creator: "@DoctorKoala"
  },
  {
    url: meme6,
    creator: "@DoctorKoala"
  },
  {
    url: meme7,
    creator: "@DoctorKoala"
  },
  {
    url: meme8,
    creator: "@Romanov"
  }
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((item, index) => {
          // console.log("imageUrl", imageUrl);
          return (
            <div className="slider" key={index}>
              <div className="slider__content">
                {!!item.creator && (
                  <p>
                    Author: <span>{item.creator}</span>
                  </p>
                )}

                <img src={item.url} />
                {/* <p>
                  The meme will be published after the{" "}
                  <span
                    onClick={() =>
                      window.open(
                        "https://t.me/winnieton/49",
                        "_blank",
                        "target"
                      )
                    }
                  >
                    contest
                  </span>{" "}
                  is over.
                </p> */}
              </div>
              {/* <img src={imageUrl.url} alt="movie" /> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
