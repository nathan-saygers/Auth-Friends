import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddFriendForm = () => {
  const [ newFriend, setNewFriend ] = useState({
      id: Date.now(),
      name: '',
      age: 0,
      email: ''
  })

  const submit = event => {
    event.preventDefault()
    axiosWithAuth()
    .post('/friends', newFriend)
    .then(response => {
      console.log(response)
    })
    .catch(err=> console.log(err));
  }

  const handleChanges = event => {
    setNewFriend(
      {...newFriend, [event.target.name]: event.target.value}
    )
    console.log('new newFriend from login component', newFriend);
  }

  return (
    <form onSubmit={submit}>
      <input 
        type="name" 
        name="name" 
        placeholder="name"
        value={newFriend.name} 
        onChange={handleChanges} 
        />
      <input 
        type="age" 
        name="age" 
        placeholder="age"
        value={newFriend.age} 
        onChange={handleChanges} 
        />
      <input 
        type="email" 
        name="email" 
        placeholder="email"
        value={newFriend.email} 
        onChange={handleChanges} 
        />
      <button>Submit</button>
    </form>
  )
}

export default AddFriendForm;