import "./Studios.css";
import { Link } from "react-router-dom";

export default function Studios() {
  return (
    <div className="studios">
      <Link to="/disney" className="studio">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png"
          alt="Disney"
        />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4"
            type="video/mp4"
          />
        </video>
      </Link>

      <Link to="/pixar" className="studio">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png"
          alt="Pixar"
        />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4"
            type="video/mp4"
          />
        </video>
      </Link>

      <Link to="/marvel" className="studio">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png"
          alt="Marvel"
        />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4"
            type="video/mp4"
          />
        </video>
      </Link>

      <Link to="/star-wars" className="studio">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png"
          alt="Star Wars"
        />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4"
            type="video/mp4"
          />
        </video>
      </Link>

      <Link to="/nat-geo" className="studio">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png"
          alt="NatGeo"
        />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217923-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Link>
    </div>
  );
}
