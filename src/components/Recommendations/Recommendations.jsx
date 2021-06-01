import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Recommendations.css";

export default function Recommendations({ title }) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 812,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="recommendationSection">
      <h3>{title}</h3>
      <Slider {...settings}>
        <div className="recommendationVideo">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
            alt="Mandalorian"
          />
        </div>
        <div className="recommendationVideo">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
            alt="Mandalorian"
          />
        </div>
        <div className="recommendationVideo">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
            alt="Mandalorian"
          />
        </div>
        <div className="recommendationVideo">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
            alt="Mandalorian "
          />
        </div>
        <div className="recommendationVideo">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
            alt="Mandalorian"
          />
        </div>
        <div className="recommendationVideo">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
            alt="Mandalorian "
          />
        </div>
        <div className="recommendationVideo">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
            alt="Mandalorian"
          />
        </div>
      </Slider>
    </div>
  );
}
