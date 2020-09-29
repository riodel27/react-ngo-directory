import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  IconButton,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

import { useStyles } from "./styled";
import Grid from "components/Organization/Grid";
import Modal from "components/Organization/Modal";
import useOrganizations from "hooks/organization/query/useOrganizations";
import { useFormNgoFields } from "_libs/hooksLib";
import useCreateNgoMutation from "hooks/organization/mutation/useCreateNgoMutation";

interface NgoProps {}

export const Ngo: React.FC<NgoProps> = ({}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [organization, setOrganization] = useState({});
  const [fields, handleFieldChange, resetFields] = useFormNgoFields(null);

  const { isLoading, data: organizations, isError } = useOrganizations();
  const [createNgo, { status, error }] = useCreateNgoMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (action) {
      case "Add":
        createNgo(fields);
        break;
      case "Delete":
        console.log("Delete organization");
        break;
      case "Edit":
        console.log("Edit organization");
        break;

      default:
    }

    setOpen(false);
    resetFields();
  };

  if (isLoading)
    return (
      <>
        <LinearProgress />
      </>
    );

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
                  setAction("Add");
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
        action={action}
        organization={organization}
        // activeOrganization={activeOrganization}
        // setActiveOrganization={setActiveOrganization}
        handleSubmit={handleSubmit}
        handleFieldChange={handleFieldChange}
      />
    </>
  );
};

export default Ngo;
