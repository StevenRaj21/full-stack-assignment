/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import Button from "./Button";
import { createUserApi, updateUserApi } from "../api/userApi";

const UserForm = ({ fetchUsers, editUser, setEditUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    if (editUser) {
      setFormData({
        username: editUser.username || "",
        email: editUser.email || "",
        age: editUser.age || "",
      });
    }
  }, [editUser]);

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editUser) {
        await updateUserApi(editUser.id, formData);
        setEditUser(null);
      } else {
        await createUserApi(formData);
      }

      setFormData({
        username: "",
        email: "",
        age: "",
      });

      fetchUsers();
    } catch (error) {
      console.error("User Create/Update Error:", error);
    }
  };

  return (
    <>
      <h3>{editUser ? "Update User" : "Create New User"}</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Id"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <Button text={editUser ? "Update" : "Submit"} type="submit" />
      </form>
    </>
  );
};

export default UserForm;
