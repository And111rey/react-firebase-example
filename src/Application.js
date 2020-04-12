import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

//import map from "lodash/map";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      restaurants: null
    };

    this.restaurantRef = database.ref('/restaraunts');
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => { // this method return all data about user whos was registeted
      console.log("__DATA anout regist.user_", currentUser);
      this.setState({currentUser});

      this.restaurantRef.on("value", (snapshot) => {
        
        this.setState({restaurants: snapshot.val() }); // return all data
      });
    });
  }
  

  render() {
    console.log("____ALL STATE___", this.state);
    const {currentUser, restaurants} = this.state;
    console.log("/*/*/*//", restaurants);
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
          <div>
            
            {!currentUser && < SignIn /> }
            {currentUser && 
              <div>
                < NewRestaurant/>
                < Restaurants restaurants={restaurants} user={currentUser}/>
                < CurrentUser user={currentUser} />
              </div>
            }
          </div>
        </header>
      </div>
    );
  }
}

export default Application;
