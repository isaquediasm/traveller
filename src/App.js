import React, { Component } from 'react';
import { 
  SearchResult,
  Header,
  Input,
  OfferList
} from './components'

// Static import
import offers from './resources/offers.json'
import './App.css';

class App extends Component {
  state = {
    searchQuery: '',
    selectedCity: 'berlin',
    headerColor: '#c7dbd2',
  }

  handleValueChange = (value, state) => this.setState({ searchQuery: '', [state]: value })
  
  render() {
    const findOffers = (city, offers) => offers.filter(val => val.city.toLowerCase() === city)

    // Get the cities from the offers list
    const offerCities = offers.data
      .map(obj => obj.city.toLowerCase())

    // Create a set to avoid replication
    const uniqueCities = [...new Set(offerCities)]

    // Create a new object with the offers listed by city
    const offersPerCity = Object.assign(
      ...uniqueCities.map(city => (
        { [city]: findOffers(city, offers.data) }
      ))
    )

    const { selectedCity, headerColor } = this.state
    const searchQuery = this.state.searchQuery.toLowerCase().replace(/\s+/g, '')
    const showResults = searchQuery.length > 0 || !offersPerCity.hasOwnProperty(selectedCity)

    return (
      <div className="App">
        <Header color={headerColor}>
          <div>
            <Input
              onChange={(event) => this.handleValueChange(event.target.value, 'searchQuery')}
              placeholder='Search'
            />
            {showResults && searchQuery.length > 0 && 
              <SearchResult 
                items={uniqueCities}
                searchQuery={searchQuery}
                onSelect={(event) => this.handleValueChange(event.value, 'selectedCity')}
              />
            }
          </div>
          <input
            type="color"
            name="favcolor"
            onChange={(event) => this.handleValueChange(event.target.value, 'headerColor')}
          />
          <h1>Welcome to {selectedCity}</h1>
        </Header>
        <OfferList offers={offersPerCity[selectedCity]} />
      </div>
    );
  }
}

export default App;
