import React, { PropTypes } from 'react';
import ResultItem from './subcomponents/ResultItem'
import boldMatch from '../../utils/string'
import './SearchResult.css'

const SearchResult = ({ items, searchQuery, onSelect }) => {
  const result = items.filter(val => val.search(searchQuery) > -1)

  return (
    <div className="search-result">
      <ul>
        {result.map((val) => (
          <ResultItem
            key={val.id}
            id={val.id}
            value={val}
            valueModifier={boldMatch(val, searchQuery)}
            onSelect={onSelect}
          />
        ))}
        {!result.length && <li>Oops, we currently do not have any places that match your search.</li>}
      </ul>
    </div>
  );
}

SearchResult.propTypes = {
  items: PropTypes.array,
  searchQuery: PropTypes.string,
  onSelect: PropTypes.func
}

export default SearchResult;
