import React, { useContext } from "react";

import { friendsContext } from "../contexts/friendsContext";

const Friend = props => {
  const {
    deleteFriend,
    editingFriend,
    setEditingFriend,
    setIsEditing
  } = useContext(friendsContext);

  const handleEditToggle = e => {
    e.preventDefault();
    setEditingFriend({
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email,
      id: props.friend.id
    });
    setIsEditing(true);
    console.log(editingFriend);
  };
  return (
    <div className="friendCard">
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>email: {props.friend.email}</p>
      <div className="cardButtonDiv">
        <button onClick={() => deleteFriend(props.friend.id)}>delete</button>
        <button onClick={handleEditToggle}>edit</button>
      </div>
    </div>
  );
};

export default Friend;
