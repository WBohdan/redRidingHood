import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

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
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
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
        {sliderImageUrl.map((imageUrl, index) => {
          console.log("imageUrl", imageUrl);
          return (
            <div className="slider" key={index}>
              <div className="slider__content">
                <p>
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
                </p>
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
