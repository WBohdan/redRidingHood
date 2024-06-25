import { Element } from "react-scroll";
import "react-multi-carousel/lib/styles.css";

import styles from "./VideoWidget.module.scss";
import { video2, video3 } from "../../../../../src/assets/videos";

const VideoWidget = () => {
  return (
    <>
      <div className={styles["tokenomicsWidget__topWidget"]}></div>
      <Element name="tokenomics">
        <div className={styles["tokenomicsWidget"]}>
          <div className={styles["tokenomicsWidget__title"]}>
            Winnie Concert
          </div>

          <div className={styles["tokenomicsWidget__content"]}>
            <div>
              <video controls>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default VideoWidget;
