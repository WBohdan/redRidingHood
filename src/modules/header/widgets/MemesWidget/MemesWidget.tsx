import { Element } from "react-scroll";
import "react-multi-carousel/lib/styles.css";

import styles from "./MemesWidget.module.scss";
import { Slider } from "@components";

const TokenomicsWidget = () => {
  return (
    <>
      <div className={styles["tokenomicsWidget__topWidget"]}></div>
      <Element name="tokenomics">
        <div className={styles["tokenomicsWidget"]}>
          <p className={styles["tokenomicsWidget__title"]}>Memes</p>
          <p className={styles["tokenomicsWidget__subtitle"]}>
            Memes from our{" "}
            <span
              onClick={() =>
                window.open("https://t.me/winnieton/49", "_blank", "target")
              }
            >
              contest
            </span>{" "}
            will be displayed here
          </p>

          <Slider />
        </div>
      </Element>
    </>
  );
};

export default TokenomicsWidget;
