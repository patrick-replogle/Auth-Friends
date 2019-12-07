import React, { useState, useContext, useEffect } from "react";

import { friendsContext } from "../contexts/friendsContext";

const Form = () => {
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

  useEffect(() => {
    if (isEditing) {
      setFormData({
        name: editingFriend.name,
        age: editingFriend.age,
        email: editingFriend.email
      });
    }
  }, [isEditing]);

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
  const handleEditSubmit = e => {
    e.preventDefault();
    editFriend(editingFriend.id, { ...formData, id: Date.now() });
    setFormData({ name: "", age: "", email: "" });
    setEditingFriend({ name: "", age: "", email: "", id: "" });
    setIsEditing(false);
  };

  return (
    <>
      <h3>{`You have ${friendsList.length} friends. Add another below: `}</h3>
      <>
        <form onSubmit={isEditing ? handleEditSubmit : handleSubmit}>
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
    </>
  );
};

export default Form;
