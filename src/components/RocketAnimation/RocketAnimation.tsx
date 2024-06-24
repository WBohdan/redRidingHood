import styles from "./RocketAnimation.module.scss";

// import { useEffect, useState } from "react";
// import { video1 } from "../../../src/assets/videos";

const RocketAnimation = () => {
  // useEffect(() => {
  //   setStartAnimation(true);
  //   setTimeout(() => {
  //     setStartAnimation(false);
  //     setTimeout(() => {
  //       setShowRocketAnimation(false);
  //     }, 300);
  //   }, 3000);
  // }, []);

  return (
    <div className={styles["rocketAnimation"]}>
      {/* <div
        className={clsx(styles["rocketAnimation__background"], {
          [styles["visible"]]: startAnimation
        })}
      >
        <Lottie options={defaultOptions} />
      </div>

      <img
        src={trumpWithFlags}
        alt="Rocket"
        className={clsx(styles["rocketAnimation__img"], {
          [styles["launched"]]: startAnimation
        })}
      /> */}
      {/* <video src={video1} autoPlay loop /> */}
    </div>
  );
};

export default RocketAnimation;
