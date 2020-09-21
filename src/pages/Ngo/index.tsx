import React from "react";
import {
  Container,
  CssBaseline,
  IconButton,
  Typography,
} from "@material-ui/core";

import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

import { useStyles } from "./styled";

interface NgoProps {}

export const Ngo: React.FC<NgoProps> = ({}) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        {/* Heading */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary">
              <span>NGO Directory</span>
              <IconButton
                aria-label="add"
                // onClick={() => {
                //   setOpen(true);
                //   setActiveOrganization({
                //     org_name: "",
                //     org_description: "",
                //     org_city: "",
                //     org_country: "",
                //     org_picture: "",
                //   });
                //   setAction("Add");
                // }}
              >
                <AddCircleOutlinedIcon />
              </IconButton>
            </Typography>
          </Container>
        </div>

        {/* {managedOrganizations.length > 0 && (
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Organizations you manage
            </Typography>
            <br></br>
            {renderOrganizationsGrid(managedOrganizations)}
          </Container>
        )} */}

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
          {/* {renderOrganizationsGrid(organizations)} */}
        </Container>
      </main>
    </>
  );
};

export default Ngo;
