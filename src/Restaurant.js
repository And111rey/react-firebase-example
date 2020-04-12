import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, user, handleDeselect, votes, handleSelect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);
    return (

      <article className="Restaurant">
        <h3>{ name }</h3>

        <ui>
          { votes && map(votes, (vote, key) =>{
              return <li key={key}> {vote } </li>;
          })}
        </ui>

          {
            userHasSelected
              ? <button style={{ backgroundColor: "tomato"}}  onClick = {handleDeselect}>Nah , nevermind</button>
              : <button  onClick = {handleSelect}> Yes , I'd go there</button>
          }




      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
