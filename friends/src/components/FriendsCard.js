import React from 'react';

const FriendsCard = props => {

  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  )
}

export default FriendsCard;