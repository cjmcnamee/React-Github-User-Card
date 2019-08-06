import React from 'react';

function FollowerCard(props) {
  return(
    <>
    {props.followers.map(user => (
      <div className="userCard">
        <img className="gitImage" src={`${user.avatar_url}`}/>
        <div>
          <h1>{user.login}</h1>
        </div>
      </div>
    ))}
    </>
  )
}

export default FollowerCard;
