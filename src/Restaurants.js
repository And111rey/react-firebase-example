import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';
import {database} from "./firebase"

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key) {
    const currentUser = this.props.user;
    database.ref("/restaraunts").child(key).child("votes").child(currentUser.uid).set(currentUser.displayName);
  }

  handleDeselect(key) {
    const currentUser = this.props.user;
    database.ref("/restaraunts").child(key).child("votes").child(currentUser.uid).remove();

  }

  render () {
    const { restaurants, user } = this.props;
    
    return (
      <section className="Restaurants">
        { 
          map(restaurants, (restaurant, key) => {
            return <Restaurant 
                key={key} 
                user={user}
                {...restaurant }
                handleSelect = {() => this.handleSelect(key)}
                handleDeselect = {() => this.handleDeselect(key)}  
                />;
                
            }) 
        }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
