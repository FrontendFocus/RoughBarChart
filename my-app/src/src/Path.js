import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Path as SvgPath } from "react-native-svg";
import { useRough } from "../hooks";

const Path = ({ onPress,d, ...o }) => {
  const generator = useRough(o);
  const paths = generator.toPaths(generator.path(d, o));

  return (
    <>
      {paths.map((pathInfo) => (
        <SvgPath
          key={pathInfo.d}
          d={pathInfo.d}
          stroke={pathInfo.stroke}
          strokeWidth={pathInfo.strokeWidth}
          fill={pathInfo.fill}
  onPress={onPress}
        />
      ))}
    </>
  );
};

Path.propTypes = {
  d: PropTypes.string.isRequired,
};

Path.defaultProps = {};

export default Path;
