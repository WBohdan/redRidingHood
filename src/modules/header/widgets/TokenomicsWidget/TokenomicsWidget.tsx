import { Chart, Terms, TaxHaven, Statment } from "../../../../assets/icons";
import { Element } from "react-scroll";

import styles from "./TokenomicsWidget.module.scss";

const TokenomicsWidget = () => {
  return (
    <>
      <div className={styles["tokenomicsWidget__topWidget"]}></div>
      <Element name="tokenomics">
        <div className={styles["tokenomicsWidget"]}>
          <p className={styles["tokenomicsWidget__title"]}>Tokenomics</p>

          <div className={styles["tokenomicsWidget__content"]}>
            <div>
              <p className={styles["tokenomicsWidget__description"]}>
                Tokenomics $WINNIE follows conventional tokenomics. Get ready
                for an exciting adventure as we reveal the fascinating ins and
                outs that define the $WINNIE ecosystem.
              </p>

              <p className={styles["tokenomicsWidget__descriptionItem"]}>
                5% team
              </p>
              <p className={styles["tokenomicsWidget__descriptionItem"]}>
                95% dedust
              </p>
            </div>

            <Chart />
          </div>

          <div className={styles["tokenomicsWidget__itemsBlock"]}>
            <div
              style={{ backgroundColor: "#0B5DA6" }}
              className={styles["tokenomicsWidget__item"]}
            >
              <Terms />
              <p>Contract Revoked</p>
            </div>
            <div className={styles["tokenomicsWidget__item"]}>
              <Statment />
              <p>Liquidity locked</p>
            </div>
            <div
              style={{ backgroundColor: "#E76851" }}
              className={styles["tokenomicsWidget__item"]}
            >
              <TaxHaven />
              <p>No taxes</p>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default TokenomicsWidget;
