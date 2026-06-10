import Button from "./Button";

const UserList = ({ users, setEditUser, handleDeleteUser }) => {
  return (
    <>
      <h3>Users List</h3>

      {users.map((renderData) => (
        <div key={renderData.id}>
          <p>
            <b>ID:</b> {renderData.id}
          </p>
          <p>
            <b>User Name:</b> {renderData.username}
          </p>
          <p>
            <b>Email:</b> {renderData.email}
          </p>
          <p>
            <b>Age:</b> {renderData.age}
          </p>
          <Button text="Edit" onClick={() => setEditUser(renderData)} />
          &nbsp;
          <Button
            text="Delete"
            onClick={() => handleDeleteUser(renderData.id)}
          />
          <hr />
        </div>
      ))}

      <hr />
    </>
  );
};

export default UserList;
