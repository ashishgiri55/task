import React from 'react';
import SearchBar from 'material-ui-search-bar';
import LinearProgress from '@material-ui/core/LinearProgress';

const SearchBreweries = ({ onSearch,loading }) => {
  return (
    <div className="searchbar">
      <SearchBar
        onRequestSearch={onSearch}
        placeholder="Search Breweries..."
        autoFocus
      />
      {loading && <LinearProgress />}
    </div>
  );
};

export default SearchBreweries;
