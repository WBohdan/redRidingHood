import { Element } from "react-scroll";

// assets
import { TelegramIcon, TwitterIcon } from "@icons";

// styles
import styles from "./FooterWidget.module.scss";

const FooterWidget = () => {
  return (
    <>
      <div className={styles["footerWidget__blueWidget"]} />
      <Element name="join_us">
        <div className={styles["footerWidget"]}>
          <div>
            <p className={styles["footerWidget__title"]}>Join us</p>
            <p className={styles["footerWidget__subtitle"]}>
              Embrace the unconventional and embark on an enthralling journey
              guided by the $WINNIE meme token, traversing the captivating
              landscapes of the crypto universe!
            </p>
          </div>
          <div className={styles["footerWidget__socialMedia"]}>
            <div
              onClick={() =>
                window.open("https://t.me/winnie_community", "_blank", "target")
              }
            >
              <TelegramIcon width={50} height={40} />
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://twitter.com/Winnieonton",
                  "_blank",
                  "target"
                )
              }
            >
              <TwitterIcon />
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default FooterWidget;
