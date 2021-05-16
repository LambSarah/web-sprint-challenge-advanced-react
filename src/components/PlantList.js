import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super();
    this.state = {
      plants: [],
      filterByText: '',
    }
  }

  // after mounting component, make get call to API amd set response to state
  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then(res => {
        console.log(res);
        this.setState({ plants: res.data });
      });
  }

  // filter input event handler 
  handleSearchInput = e => {
    this.setState({ filterByText: e.target.value });
  }

  // For the MVP tasks, I did not make any changes in the render function, but in order to implement the filter input stretch goal, I had to change the map function in render and all the plant state references to seachedPlant. I made sure it did not affect anything else, see below
  render() {
    return (
      <main className="plant-list">
        <input type='text'
          placeholder='Start typing to filter results'
          name='filterInput'
          id='filterInput'
          className='filter plant-filter'
          onChange={this.handleSearchInput} />
        {this.state?.plants?.filter(plant =>
          plant.name.toLowerCase().includes(this.state.filterByText.toLowerCase())).map(searchedPlant => {
            return (
              <div className="plant-card" key={searchedPlant.id} data-testid="plant-card">
                <img className="plant-image" src={searchedPlant.img} alt={searchedPlant.name} />
                <div className="plant-details">
                  <h2 className="plant-name">{searchedPlant.name}</h2>
                  <p className="plant-scientific-name">{searchedPlant.scientificName}</p>
                  <p>{searchedPlant.description}</p>
                  <div className="plant-bottom-row">
                    <p>${searchedPlant.price}</p>
                    <p><span role='img' aria-label='sunlight emoji'>☀️ </span>{searchedPlant.light}</p>
                    <p><span role='img' aria-label='raindrops emoji'>💦</span> {searchedPlant.watering}x/month</p>
                  </div>
                  <button
                    className="plant-button"
                    onClick={() => this.props.addToCart(searchedPlant)}
                  >
                    Add to cart
              </button>
                </div>
              </div>
            )
          })
        }
      </main>
    );
  }
}
