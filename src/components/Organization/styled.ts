import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
   card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
   },
   cardMedia: {
      paddingTop: '56.25%' // 16:9
   },
   cardContent: {
      flexGrow: 1
   },
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
}));
