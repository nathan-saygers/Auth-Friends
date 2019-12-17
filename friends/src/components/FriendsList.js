import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendsCard from './FriendsCard';

const FriendsList = () => {
  const [ friendData, setFriendData] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(response => {
        setFriendData(response.data);
      })
      .catch(err => console.log(err));
  }, [])

  console.log('friend data', friendData);

  return(
    <div>
      {friendData.map(friend => (
        <FriendsCard 
          name={friend.name}
          age={friend.age}
          email={friend.email}
        />
      ))}
    </div>
  )
}

export default FriendsList;