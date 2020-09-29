import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";

interface GridProps {}

const OrganizationGrid: React.FC<GridProps | any> = (props) => {
  const { organizations } = props;
  return (
    <Grid container spacing={4}>
      {organizations &&
        organizations.map((organization: any) => (
          <Card
            key={organization.org_name}
            organization={organization}
            {...props}
          />
        ))}
    </Grid>
  );
};

export default OrganizationGrid;
