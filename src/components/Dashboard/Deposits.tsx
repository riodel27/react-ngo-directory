import { Link, Typography } from "@material-ui/core";
import React from "react";

import { useStyles } from "./styled";

import Title from "./Title";

interface DepositsProps {}

const Deposits: React.FC<DepositsProps> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={(e: any) => e.preventDefault()}>
          View balance
        </Link>
      </div>
    </>
  );
};

export default Deposits;
