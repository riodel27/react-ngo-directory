import Grid from '@material-ui/core/Grid';
import React from 'react';

import Card from './Card';

interface GridProps {
   organizations: [any];
   handleAction: ({ event, active_ngo }: { event: string; active_ngo: any }) => void;
}

const OrganizationGrid: React.FC<GridProps> = (props) => {
   const { organizations, handleAction } = props;
   return (
      <Grid container spacing={4}>
         {organizations &&
            organizations.map((organization: any) => (
               <Card
                  key={organization.org_name}
                  organization={organization}
                  handleAction={handleAction}
               />
            ))}
      </Grid>
   );
};

export default OrganizationGrid;
