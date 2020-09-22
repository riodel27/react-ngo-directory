import React, { useEffect, useState } from "react";
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
import OrganizationService from "_services/organization.service";

interface NgoProps {}

export const Ngo: React.FC<NgoProps> = ({}) => {
  const classes = useStyles();

  const [organizations, setOrganizations] = useState([]);

  const [activeOrganization, setActiveOrganization] = useState(null);
  const [action, setAction] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const organizations = await OrganizationService.getOrganizations();
      setOrganizations(organizations.data.data);

      // managed organizations by user id
    })();
  }, []);

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
          <Grid organizations={organizations} />
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
