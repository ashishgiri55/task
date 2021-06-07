import {
  CardContent,
  Container,
  Card,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Breweries = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get('https://api.openbrewerydb.org/breweries/' + id)
      .then((res) => {
        setBrewery(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('could not find brewery with id=' + id);
        setLoading(false);
      });
  }, [setBrewery, id]);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;
  return (
    <Container>
      <Card className="test">
        <CardContent className="content">
          <div className="content-box">
            <h3>Name: {brewery.name}</h3>
            <p>Type: {brewery.brewery_type}</p>
            <p>City: {brewery.city}</p>
            <p>State: {brewery.state}</p>
            <p>Street: {brewery.street}</p>
            <p>Postal Code: {brewery.postal_code}</p>
            <p>Country: {brewery.country}</p>
            <p>Phone: {brewery.phone}</p>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Breweries;
