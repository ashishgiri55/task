import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from '@material-ui/core';

import React from 'react';

const BreweriesList = ({ breweriesList, onClick }) => {
  return (
    <Grid container spacing={1} className="list-container">
      {breweriesList.map((item) => (
        <Grid item xs={4} spacing={5}>
          <Card className="card-body" key={item.id}>
            {' '}
            <CardHeader title={item.name} />{' '}
            <CardContent className="content">
              <p>Type: {item.brewery_type}</p>
              <p>City: {item.city}</p>
              <p>State: {item.state}</p>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                onClick={() => onClick(item.id)}
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    // </div>
  );
};

export default BreweriesList;
