"use client"; // Mark the component as a client-side component
import React, { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    // Dynamically import Lottie component when component mounts
    import("lottie-react").then((module) => {
      setLottieComponent(() => module.default);
    });
  }, []);

  if (!LottieComponent) {
    // Return null or loading indicator if Lottie component is not yet loaded
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,

    style: {
      width: "95%",
    },
  };

  return (
    <div>
      <LottieComponent {...defaultOptions} />
    </div>
  );
};

export default AnimationLottie;
