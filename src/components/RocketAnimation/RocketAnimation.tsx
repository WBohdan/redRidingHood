import { winipoohLogo } from "@images";
import styles from "./RocketAnimation.module.scss";
import clsx from "clsx";

import { useEffect, useState } from "react";

interface IRocketAnimationProps {
  showRocketAnimation: boolean;
  setShowRocketAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const RocketAnimation = ({ setShowRocketAnimation }: IRocketAnimationProps) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
    setTimeout(() => {
      setStartAnimation(false);
      setTimeout(() => {
        setShowRocketAnimation(false);
      }, 300);
    }, 4500);
  }, []);

  return (
    <div className={styles["rocketAnimation"]}>
      <div
        className={clsx(styles["rocketAnimation__background"], {
          [styles["visible"]]: startAnimation
        })}
      />

      <img
        src={winipoohLogo}
        alt="Rocket"
        className={clsx(styles["rocketAnimation__img"], {
          [styles["launched"]]: startAnimation
        })}
      />
    </div>
  );
};

export default RocketAnimation;
