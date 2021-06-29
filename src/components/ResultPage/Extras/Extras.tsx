import "./Extras.css";
import { useState, ReactElement } from "react";
import ModalVideo from "react-modal-video";

interface IExtrasData {
  extras: Array<IExtras>;
  noExtras: boolean;
  id: number;
}

interface IExtras {
  id: string;
  length: number;
  key: string;
  name: string;
}

const Extras = ({ extras, noExtras }: IExtrasData): ReactElement => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="">
      <div className="extrasGrid">
        {noExtras ? (
          <h3 className="extrasError">No Extras Available</h3>
        ) : (
          extras.map((extra) => {
            return (
              <div key={extra.id}>
                <div
                  className="extrasVid banner recBanner"
                  onClick={() => setOpen(true)}
                >
                  <img
                    src={
                      extras.length > 0
                        ? `https://img.youtube.com/vi/${extra.key}/mqdefault.jpg`
                        : `https://img.youtube.com/vi/${extra.key}/4.jpg`
                    }
                    alt={extra.id}
                  />
                  <ModalVideo
                    key={extra.id}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId={extra.key}
                    onClose={() => setOpen(false)}
                  />
                </div>
                <h6>{extra.name}</h6>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Extras;
