import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadeLink = ({ children, className, href }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
  return (
    <animated.a className={className} href={href} style={props}>
      {children}
    </animated.a>
  );
};

export default FadeLink;
