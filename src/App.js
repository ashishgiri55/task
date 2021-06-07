import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BreweriesList from './components/BreweriesList';
import SearchBreweries from './components/SearchBreweries';
import Breweries from './components/Breweries';
import { useHistory } from 'react-router';

function App() {
  const [breweriesList, setBreweriesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    axios.get('https://api.openbrewerydb.org/breweries').then((res) => {
      setBreweriesList(res.data);
      setLoading(false);
    });
  }, [setBreweriesList]);

  const onSearch = (value) => {
    setLoading(true);
    axios
      .get('https://api.openbrewerydb.org/breweries/search?query=' + value)
      .then((res) => {
        setBreweriesList(res.data);
        setLoading(false);
      });
  };

  const onItemSelect = (id) => {
    history.push('/brewery/' + id);
  };

  return (
    <div className="App">
      <SearchBreweries onSearch={onSearch} loading={loading} />
      <BreweriesList breweriesList={breweriesList} onClick={onItemSelect} />
     
    </div>
  );
}

export default App;
