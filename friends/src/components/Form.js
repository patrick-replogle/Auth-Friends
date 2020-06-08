import React, { useState, useContext, useEffect } from "react";

import { friendsContext } from "../contexts/friendsContext";

const Form = () => {
  const {
    addFriend,
    editFriend,
    isEditing,
    setIsEditing,
    editingFriend,
    friendsList
  } = useContext(friendsContext);

  const [formData, setFormData] = useState({ name: "", age: "", email: "" });

  //useEffect helps render/populate the form with the editingFriend if isEditing is true
  useEffect(() => {
    if (isEditing) {
      setFormData({
        name: editingFriend.name,
        age: editingFriend.age,
        email: editingFriend.email
      });
    }
  }, [isEditing, editingFriend.age, editingFriend.email, editingFriend.name]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handlesubmit now works for both editing and posting
  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      editFriend(editingFriend.id, { ...formData, id: Date.now() });
      setIsEditing(false);
    } else {
      addFriend({ ...formData, id: Date.now() });
    }
    setFormData({ name: "", age: "", email: "" });
  };

  return (
    <>
      <h3>{`You have ${friendsList.length} friends. Add another below: `}</h3>
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
    </>
  );
};

export default Form;
