import { Link } from "react-scroll";

// ui
import { Button } from "@ui";

// assets
import { winipoohLogo } from "@images";

// styles
import styles from "./HeaderWidget.module.scss";

const HeaderWidget = () => {
  return (
    <div className={styles["headerWidget"]}>
      <div className={styles["headerWidget__topWidget"]}></div>
      <div className={styles["headerWidget__menu"]}>
        <h1>WINNIE</h1>

        <nav>
          <li onClick={() => window.location.reload()}>HOME</li>

          <Link to="tokenomics" smooth={true} duration={500}>
            <li>TOKENOMIKS</li>
          </Link>

          <Link to="game" smooth={true} duration={500}>
            <li>GAME</li>
          </Link>

          <Link to="join_us" smooth={true} duration={500}>
            <li>JOIN US</li>
          </Link>
        </nav>
      </div>

      <div className={styles["headerWidget__contentWrapper"]}>
        <div className={styles["headerWidget__content"]}>
          <h1>Join our mission</h1>
          <p>
            We are going to help Winnie the Pooh collect honey so that life will
            be fun. 🐝🌻🍯
          </p>
          <div className={styles["headerWidget__contentButton"]}>
            <Button
              text="Buy honey for winnipooh 🍯"
              onClick={() =>
                window.open(
                  "https://dedust.io/swap/TON/EQDLHDxuSXLpMYqZFjKWYsQtTQ8lr5_vhNdIVD3EReGlOPYk?amount=20000000000",
                  "_blank",
                  "target"
                )
              }
            />
          </div>
        </div>
        <img src={winipoohLogo} />
      </div>
    </div>
  );
};

export default HeaderWidget;
