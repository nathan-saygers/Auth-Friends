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

  const deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(response => {
      console.log('delete call', response);
      let reRenderArr = friendData.filter(friend => friend.id !== Number(id));
      setFriendData(reRenderArr);
      })
      .catch(err => console.log(err))
  }

  console.log('friend data', friendData);

  return(
    <div>
      {friendData.map(friend => (
        <FriendsCard 
          name={friend.name}
          age={friend.age}
          email={friend.email}
          id={friend.id}
          deleteFriend={deleteFriend}
        />
      ))}
    </div>
  )
}

export default FriendsList;