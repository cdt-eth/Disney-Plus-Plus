import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
  };

  return (
    <div className="slideWrapper">
      <Slider {...settings}>
        <div className="banner">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F2714C42107E421DB04F96D1C4E269955A7F578C59B614505FE499FDC8A08CA/scale?width=2880&aspectRatio=3.91&format=jpeg"
            alt="bad batch"
          />
        </div>
        <div className="banner">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F2714C42107E421DB04F96D1C4E269955A7F578C59B614505FE499FDC8A08CA/scale?width=2880&aspectRatio=3.91&format=jpeg"
            alt="bad batch"
          />
        </div>
        <div className="banner">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F2714C42107E421DB04F96D1C4E269955A7F578C59B614505FE499FDC8A08CA/scale?width=2880&aspectRatio=3.91&format=jpeg"
            alt="bad batch"
          />
        </div>
        <div className="banner">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F2714C42107E421DB04F96D1C4E269955A7F578C59B614505FE499FDC8A08CA/scale?width=2880&aspectRatio=3.91&format=jpeg"
            alt="bad batch"
          />
        </div>
        <div className="banner">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F2714C42107E421DB04F96D1C4E269955A7F578C59B614505FE499FDC8A08CA/scale?width=2880&aspectRatio=3.91&format=jpeg"
            alt="bad batch"
          />
        </div>
        <div className="banner">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F2714C42107E421DB04F96D1C4E269955A7F578C59B614505FE499FDC8A08CA/scale?width=2880&aspectRatio=3.91&format=jpeg"
            alt="bad batch"
          />
        </div>
      </Slider>
    </div>
  );
}
