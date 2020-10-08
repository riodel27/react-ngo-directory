import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Typography
} from '@material-ui/core';
import React from 'react';

import { useStyles } from './styled';

interface CardProps {
   organization: any; // todo Organization Type
   handleAction: ({ event, active_ngo }: { event: string; active_ngo: any }) => void;
}

const OrganizationCard: React.FC<CardProps> = ({ organization, handleAction }) => {
   const classes = useStyles();

   return (
      <>
         <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
               <CardMedia
                  className={classes.cardMedia}
                  image={organization.org_picture || 'https://picsum.photos/300'}
                  title="Image title"
               />
               <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                     {organization.org_name}
                  </Typography>
                  <Typography>{organization.org_description}</Typography>
               </CardContent>
               <CardActions>
                  <Button
                     size="small"
                     color="primary"
                     onClick={() => handleAction({ event: 'View', active_ngo: organization })}>
                     View
                  </Button>
                  <Button
                     size="small"
                     color="primary"
                     onClick={() => handleAction({ event: 'Edit', active_ngo: organization })}>
                     Edit
                  </Button>
                  <Button
                     size="small"
                     color="primary"
                     onClick={() => handleAction({ event: 'Delete', active_ngo: organization })}>
                     Delete
                  </Button>
               </CardActions>
            </Card>
         </Grid>
      </>
   );
};

export default OrganizationCard;
