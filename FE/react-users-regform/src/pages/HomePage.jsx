/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { deleteUserApi, getUserApi } from "../api/userApi";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await getUserApi();
      setUsers(response.data);
    } catch (error) {
      console.error("Fetch Users Error:", error);
    }
  };

  // Handle Delete User
  const handleDeleteUser = async (id) => {
    try {
      await deleteUserApi(id);
      await fetchUsers();
    } catch (error) {
      console.error("Delete User Error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>
        <u>User Registration Portal</u>
      </h1>

      <UserForm
        fetchUsers={fetchUsers}
        editUser={editUser}
        setEditUser={setEditUser}
      />

      <hr />

      <UserList
        users={users}
        setEditUser={setEditUser}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
};

export default HomePage;
