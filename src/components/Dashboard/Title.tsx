import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

interface TitleProps {}

export const Title: React.FC<TitleProps | any> = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
