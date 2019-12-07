import React, { useState, useContext } from "react";

import { friendsContext } from "../contexts/friendsContext";

const Form = props => {
  const {
    addFriend,
    editFriend,
    isEditing,
    setIsEditing,
    editingFriend,
    setEditingFriend,
    friendsList
  } = useContext(friendsContext);

  const [formData, setFormData] = useState({ name: "", age: "", email: "" });
  const [editFormData, setEditFormData] = useState({
    name: editingFriend.name,
    age: editingFriend.age,
    email: editingFriend.email,
    id: editingFriend.id
  });

  //post new friend
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //post new friend
  const handleSubmit = e => {
    e.preventDefault();
    addFriend({ ...formData, id: Date.now() });
    setFormData({ name: "", age: "", email: "" });
  };

  //edit friend
  const handleEditChange = e => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  //edit friend
  const handleEditSubmit = e => {
    e.preventDefault();
    editFriend(editingFriend.id, { ...editFormData, id: editingFriend.id });
    console.log(editingFriend);
    console.log(editFormData);
    setEditFormData({ name: "", age: "", email: "" });
    setEditingFriend({ name: "", age: "", email: "", id: "" });
    setIsEditing(false);
  };

  return (
    <>
      <h3>{`You have ${friendsList.length} friends. Add another below: `}</h3>
      {isEditing ? (
        <>
          <form onSubmit={handleEditSubmit}>
            <input
              onChange={handleEditChange}
              type="text"
              name="name"
              value={editFormData.name}
              placeholder={editingFriend.name}
            />
            <input
              onChange={handleEditChange}
              type="number"
              name="age"
              value={editFormData.age}
              placeholder={editingFriend.age}
            />
            <input
              onChange={handleEditChange}
              type="text"
              name="email"
              value={editFormData.email}
              placeholder={editingFriend.email}
            />
            <button>submit</button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={formData.name}
              placeholder="name"
            />
            <input
              onChange={handleChange}
              type="number"
              name="age"
              value={formData.age}
              placeholder="age"
            />
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={formData.email}
              placeholder="email"
            />
            <button>submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
