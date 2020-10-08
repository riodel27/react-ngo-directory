import {
   Button,
   Dialog,
   DialogContentText,
   IconButton,
   TextField,
   Typography,
   withStyles
} from '@material-ui/core';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

interface ModalProps {
   organization: any;
   action: string;
   open: boolean;
   setOpen: (x: boolean) => void;
   close?: boolean;
   handleSubmit: (
      event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => void;
   handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OrganizationModal: React.FC<ModalProps> = ({
   organization,
   action,
   open,
   setOpen,
   close,
   handleSubmit,
   handleFieldChange
}) => {
   return (
      <Dialog onClose={() => setOpen(false)} aria-labelledby="customized-dialog-title" open={open}>
         <DialogTitle id="customized-dialog-title" onClose={close}>
            {action === 'View' ? 'Organization Details' : `${action} Organization Details`}
         </DialogTitle>
         <DialogContent>
            {action === 'Edit' && (
               <DialogContentText>
                  Please make the necessary edits to this specific organization.
               </DialogContentText>
            )}
            {action === 'View' && (
               <img
                  src={organization.org_picture || 'https://source.unsplash.com/random'}
                  alt="org"
                  style={{ maxWidth: '100%' }}
               />
            )}
            <form noValidate onSubmit={handleSubmit}>
               <TextField
                  autoFocus
                  margin="dense"
                  id="org_name"
                  label="Name"
                  type="text"
                  fullWidth
                  value={organization ? organization.org_name : ''}
                  onChange={handleFieldChange}
                  InputProps={{
                     disabled: action === 'View'
                  }}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="org_description"
                  label="Description"
                  type="text"
                  fullWidth
                  value={organization ? organization.org_description : ''}
                  onChange={handleFieldChange}
                  InputProps={{
                     disabled: action === 'View'
                  }}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="org_city"
                  label="City"
                  type="text"
                  fullWidth
                  value={organization ? organization.org_city : ''}
                  onChange={handleFieldChange}
                  InputProps={{
                     disabled: action === 'View'
                  }}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="org_country"
                  label="Country"
                  type="text"
                  fullWidth
                  value={organization ? organization.org_country : ''}
                  onChange={handleFieldChange}
                  InputProps={{
                     disabled: action === 'View'
                  }}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="org_picture"
                  label="Photo Link"
                  type="text"
                  fullWidth
                  value={organization ? organization.org_picture : ''}
                  onChange={handleFieldChange}
                  InputProps={{
                     disabled: action === 'View'
                  }}
               />
               {['Add', 'Edit'].includes(action) && (
                  <DialogActions>
                     <Button autoFocus onClick={handleSubmit} color="primary">
                        {action === 'Add' ? 'Add' : 'Save changes'}
                     </Button>
                  </DialogActions>
               )}
            </form>
         </DialogContent>
      </Dialog>
   );
};

const styles: any = (theme: any) => ({
   root: {
      margin: 0,
      padding: theme.spacing(2)
   },
   closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
   }
});

const DialogTitle = withStyles(styles)((props: any) => {
   const { children, classes, onClose, ...other } = props;

   return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
         <Typography variant="h6">{children}</Typography>
         {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
               <CloseIcon />
            </IconButton>
         ) : null}
      </MuiDialogTitle>
   );
});

const DialogContent = withStyles((theme) => ({
   root: {
      padding: theme.spacing(2)
   }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
   root: {
      margin: 0,
      padding: theme.spacing(1)
   }
}))(MuiDialogActions);

export default OrganizationModal;
