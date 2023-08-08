import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Path } from "react-native-svg";
import { useRough } from "./hooks";
const Line = ({ key,x1, y1, x2, y2, ...o }) => {
  const generator = useRough(o);
  const [a, b] = generator.toPaths(generator.line(x1, y1, x2, y2, o));
  const { d: stroke, ...strokeProps } = a || {};
  const { d: fill, ...fillProps } = b || {};
  return (
    <>
      {!!stroke && <Path key={key} d={stroke} {...strokeProps} />}
      {!!fill && <Path key={key}d={fill} {...fillProps} />}
    </>
  );
};

Line.propTypes = {
  x1: PropTypes.any,
  y1: PropTypes.any,
  x2: PropTypes.any,
  y2: PropTypes.any,
  key:PropTypes.any
};

Line.defaultProps = {};

export default Line;
