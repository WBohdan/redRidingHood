// styles
import styles from "./HeaderWidget.module.scss";

import {
  dexscreenerIcon,
  dextoolsIcon,
  geckoterminalIcon,
  redGirl,
  telegramIcon,
  twitterIcon
} from "@images";

const HeaderWidget = () => {
  const handleOpenLink = (link: string) => {
    window.open(link, "_blank", "target");
  };
  return (
    <div className={styles["headerWidget"]}>
      <img src={redGirl} className={styles["headerWidget__logo"]} />
      <h1 className={styles["headerWidget__title"]}>Little Red Riding Hood</h1>
      <p className={styles["headerWidget__subtitle"]}>
        Standing up for one's beliefs, reminding us that each of us can be a
        hero in our own story.
      </p>

      <div className={styles["headerWidget__contract"]}>
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </div>

      <div className={styles["headerWidget__buttons"]}>
        <img
          src={dexscreenerIcon}
          onClick={() => handleOpenLink("https://dexscreener.com/ton")}
        />
        <img
          src={telegramIcon}
          onClick={() => handleOpenLink("https://t.me/littIeredridinghood")}
        />
        <img
          src={geckoterminalIcon}
          onClick={() =>
            handleOpenLink("https://www.geckoterminal.com/ton/pools")
          }
        />
        <img
          src={twitterIcon}
          onClick={() => handleOpenLink("https://x.com/RedtonHood")}
        />
        <img
          src={dextoolsIcon}
          onClick={() =>
            handleOpenLink(
              "https://www.dextools.io/app/en/ton/pair-explorer/EQA-X_yo3fzzbDbJ_0bzFWKqtRuZFIRa1sJsveZJ1YpViO3r?t=1720146762587"
            )
          }
        />
      </div>
    </div>
  );
};

export default HeaderWidget;
