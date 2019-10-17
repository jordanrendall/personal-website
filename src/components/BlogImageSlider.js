import React, { useRef } from 'react';
import { Link } from 'gatsby';

import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';
const StyledSlider = styled.div`
  /* .slider {
    position: relative;
    width: 80vw;
    height: 200px;
    will-change: transform;
  }

  .slider-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    will-change: transform;
    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
      0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
  } */

  * {
    box-sizing: border-box;
  }

  overscroll-behavior-y: contain;
  position: fixed;
  overflow: hidden;
  /* html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
  
  } */

  /* position: relative; */
  overflow: hidden;
  width: 80vw;
  height: 100%;
  cursor: move;
  cursor: grab;

  :active {
    cursor: grabbing;
  }
  /* cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')
        39 39,
      auto; */

  .slider {
    position: fixed;
    width: 80vw;
    height: auto;
    will-change: transform;
  }

  .slider-img {
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    will-change: transform;
    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
      0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
  }
`;

const BlogImageSlider = ({ posts }) => {
  const index = useRef(0);
  const [props, set] = useSprings(posts.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: 'block',
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            posts.length - 1
          ))
        );
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: 'none' };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: 'block' };
      });
    }
  );
  return props.map(({ x, display, sc, title, url }, i) => (
    <StyledSlider key={`slider-${i}`}>
      <animated.div
        className='slider'
        {...bind()}
        key={i}
        style={{
          display,
          transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
        }}
      >
        <animated.div
          className='slider-img'
          style={{
            transform: sc.interpolate(s => `scale(${s})`),
            backgroundImage: `url(${
              posts[i].node.frontmatter.banner.childImageSharp.fluid.src
            })`,
          }}
        >
          <span>{posts[i].node.frontmatter.title}</span>
          <Link to={posts[i].node.fields.slug}>
            <button>Go To Post</button>
          </Link>
        </animated.div>
      </animated.div>
    </StyledSlider>
  ));
};

export default BlogImageSlider;
