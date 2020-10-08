import React, { useState } from 'react';
import { isEmpty as _isEmpty } from 'lodash';
import { not } from 'ramda';
import { Container, CssBaseline, IconButton, LinearProgress, Typography } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

import { useStyles } from './styled';

import { _objectDiffer } from '_libs/helper';
import { useFormNgoFields } from '_libs/hooksLib';
import Grid from 'components/Organization/Grid';
import Modal from 'components/Organization/Modal';
import useCreateNgoMutation from 'hooks/organization/mutation/useCreateNgoMutation';
import useDeleteNgoMutation from 'hooks/organization/mutation/useDeleteNgoMutation';
import useUpdateNgoMutation from 'hooks/organization/mutation/useUpdateNgoMutation';
import useOrganizations from 'hooks/organization/query/useOrganizations';

export const Ngo = () => {
   const classes = useStyles();

   const [open, setOpen] = useState(false);
   const [action, setAction] = useState('');
   const [organization, setOrganizaton] = useState(null);
   const [ngo, setValues, handleFieldChange, resetNgoFields] = useFormNgoFields(null);
   const { isLoading: is_loading, data: organizations, isError: is_error } = useOrganizations();

   const [createNgo, { status, error }] = useCreateNgoMutation();
   const [updateNgo] = useUpdateNgoMutation();
   const [deleteNgo] = useDeleteNgoMutation();

   const handleAction = ({
      event,
      active_ngo
   }: {
      event: string;
      active_ngo: any; // TODO: create type for NGO in global types
   }) => {
      if (event === 'Delete') deleteNgo(active_ngo._id);
      else {
         setOpen(true);
         setAction(event);
         setValues(active_ngo);
         setOrganizaton(active_ngo);
      }
   };

   const handleSubmit = (
      event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      event.preventDefault();

      switch (action) {
         case 'Add': {
            createNgo(ngo);
            break;
         }
         case 'Edit': {
            const updated_ngo = _objectDiffer(ngo, organization);
            if (not(_isEmpty(updated_ngo)))
               updateNgo({ ...updated_ngo, id: (organization as any)._id });
            break;
         }
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

   if (is_error) return <>An error has occurred...</>;

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
                           setAction('Add');
                           setOpen(true);
                        }}>
                        <AddCircleOutlinedIcon />
                     </IconButton>
                  </Typography>
               </Container>
            </div>

            <Container className={classes.cardGrid} maxWidth="md">
               <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                  Other Organizations
               </Typography>
               <br></br>
               <Grid organizations={organizations} handleAction={handleAction} />
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
