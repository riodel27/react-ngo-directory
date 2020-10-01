import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./styled";

interface CardProps {}

const OrganizationCard: React.FC<CardProps | any> = ({
  organization,
  handleViewOrEdit,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={organization.org_picture || "https://picsum.photos/300"}
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
              onClick={() =>
                handleViewOrEdit({ event: "View", active_ngo: organization })
              }
            >
              View
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                handleViewOrEdit({ event: "Edit", active_ngo: organization })
              }
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default OrganizationCard;
