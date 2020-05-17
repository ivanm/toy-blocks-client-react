import React from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";

function Block({ id, text }) {
  const classes = useStyles();
  const formatIdNumber = number => `00${number}`;
  return (
    <Card elevation={0} className={classes.blockCard}>
      <Typography className={classes.blockHeading}>
        {formatIdNumber(id)}
      </Typography>
      <Typography className={classes.blockContent}>{text}</Typography>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  blockCard: {
    background: "#E0E0E0",
    padding: 11,
    marginBottom: 9
  },
  blockContent: {
    fontSize: theme.typography.pxToRem(15)
  },
  blockHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: "#304FFE",
    letterSpacing: 2,
    fontWeight: "bold"
  }
}));

Block.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string
};

export default Block;
