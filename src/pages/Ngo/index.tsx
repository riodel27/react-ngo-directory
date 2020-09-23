import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

import { useStyles } from "./styled";
import Grid from "components/Organization/Grid";
import Modal from "components/Organization/Modal";

import usePosts from "hooks/organization/useOrganizations";

interface NgoProps {}

export const Ngo: React.FC<NgoProps> = ({}) => {
  const classes = useStyles();

  const { isLoading, data, isError } = usePosts();

  const [open, setOpen] = useState(false);

  if (isLoading) return <>loading...</>;

  if (isError) return <>"An error has occurred..."</>;

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary">
              <span>NGO Directory</span>
              <IconButton
                aria-label="add"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <AddCircleOutlinedIcon />
              </IconButton>
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            Other Organizations
          </Typography>
          <br></br>
          <Grid organizations={data} />
        </Container>
      </main>
      <Modal
        open={open}
        setOpen={setOpen}
        // action={action}
        // activeOrganization={activeOrganization}
        // setActiveOrganization={setActiveOrganization}
        // handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Ngo;
