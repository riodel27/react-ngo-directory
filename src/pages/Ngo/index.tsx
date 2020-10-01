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
import { _objectDiffer } from "_libs/helper";
import { useFormNgoFields } from "_libs/hooksLib";
import Grid from "components/Organization/Grid";
import Modal from "components/Organization/Modal";
import useOrganizations from "hooks/organization/query/useOrganizations";
import useCreateNgoMutation from "hooks/organization/mutation/useCreateNgoMutation";
import useUpdateNgoMutation from "hooks/organization/mutation/useUpdateNgoMutation";

interface NgoProps {}

export const Ngo: React.FC<NgoProps> = ({}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [organization, setOrganizaton] = useState(null);
  const [ngo, setValues, handleFieldChange, resetNgoFields] = useFormNgoFields(
    null
  );
  const {
    isLoading: is_loading,
    data: organizations,
    isError: is_error,
  } = useOrganizations();

  const [createNgo, { status, error }] = useCreateNgoMutation();
  const [updateNgo] = useUpdateNgoMutation();

  const handleViewOrEdit = ({
    event,
    active_ngo,
  }: {
    event: string;
    active_ngo: any; // TODO: create type for NGO in global types
  }) => {
    setOpen(true);
    setAction(event);
    setValues(active_ngo);
    setOrganizaton(active_ngo);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (action) {
      case "Add":
        createNgo(ngo);
        break;
      case "Delete":
        // todo: delete ngo mutation
        break;
      case "Edit":
        const updated_ngo = _objectDiffer(ngo, organization);
        updateNgo({ ...updated_ngo, id: (organization as any)._id });
        break;

      default:
    }

    setOpen(false);
    resetNgoFields();
  };

  if (is_loading)
    return (
      <>
        <LinearProgress />
      </>
    );

  if (is_error) return <>"An error has occurred..."</>;

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
          <Grid
            organizations={organizations}
            handleViewOrEdit={handleViewOrEdit}
          />
        </Container>
      </main>
      <Modal
        open={open}
        setOpen={setOpen}
        action={action}
        organization={ngo}
        handleSubmit={handleSubmit}
        handleFieldChange={handleFieldChange}
      />
    </>
  );
};

export default Ngo;
