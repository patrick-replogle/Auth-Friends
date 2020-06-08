import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { friendsContext } from "../contexts/friendsContext";

const FriendsContextProvider = ({ children }) => {
  const [friendsList, setFriendsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingFriend, setEditingFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  //get friendslist
  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriendsList(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  //add friend
  const addFriend = friend => {
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(err => console.log(err));
  };

  //delete friend
  const deleteFriend = friendId => {
    axiosWithAuth()
      .delete(`/friends/${friendId}`)
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(err => console.log(err));
  };

  //edit friend
  const editFriend = (friendId, friend) => {
    axiosWithAuth()
      .put(`/friends/${friendId}`, friend)
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <friendsContext.Provider
      value={{
        friendsList,
        isEditing,
        setIsEditing,
        addFriend,
        deleteFriend,
        editFriend,
        editingFriend,
        setEditingFriend,
        isLoading
      }}
    >
      {children}
    </friendsContext.Provider>
  );
};

export default FriendsContextProvider;
