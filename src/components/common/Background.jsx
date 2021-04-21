import React, { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";

const slides = [
  { id: 0, url: "/images/bg/bg1.jpg" },
  { id: 1, url: "/images/bg/bg2.jpg" },
];

function Background(props) {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasseses,
  });

  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 2), 5000),
    []
  );

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="background animate__animated animate__fadeIn"
      style={{
        ...props,
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #13191b),
   url(${item.url})`,
      }}
    ></animated.div>
  ));
}

export default Background;
