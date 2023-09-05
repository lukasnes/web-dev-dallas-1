import { useState,useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [friends,setFriends] = useState([])
  const [picture,setPicture] = useState("")
  const [name,setName] = useState("")

  useEffect(() => {
    const getSavedFriends = async() => {
      const res = await axios.get('/api/friends')
      setFriends(res.data)
    }

    getSavedFriends()
  },[])
  // console.log(name,picture)
  const addFriend = (evt) => {
    // console.log(evt)
    const newFriends = [...friends,{ name:name, picture:picture }]
    // newFriends.push({ name:name, picture:picture })
    setFriends(newFriends)

    setPicture("")
    setName("")
  }

  const friendsInfo = friends.map(({ name,picture }) => {
    return (
      <div key={`${name}`}>
        <img width="100px" src={picture} alt={name} />
        <span>{name}</span>
      </div>
    )
  })

  console.log(friendsInfo)

  return (
  <div>
    <label htmlFor="picture">Picture:</label>
    <input 
      id="picture"
      type="text"
      value={picture}
      onChange={(evt) => setPicture(evt.target.value)}
    />

    <label htmlFor="name">Name:</label>
    <input 
      id="name" 
      type="text"
      value={name}
      onChange={(evt) => setName(evt.target.value)}
    />

    <button type="button" onClick={addFriend}>Add Friend</button>

    {friendsInfo}
  </div>
  );
}
