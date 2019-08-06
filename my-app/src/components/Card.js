import React from 'react';
import './Card.css'

function Card(props) {
  return(
    <div className="userCard">
      <img className="gitImage" src={`${props.users.avatar_url}`}/>
      <div>
        <h1>{props.users.login}</h1>
        <div className="follow">
          <span>Followers: {props.users.followers}</span>
          <span>Following: {props.users.following}</span>
        </div>
        <h3>{props.users.name}</h3>
        <span>{props.users.location}</span>
      </div>
    </div>
  )
}

export default Card;
