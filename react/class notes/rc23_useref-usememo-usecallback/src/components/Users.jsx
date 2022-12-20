import React, { memo } from "react";
import UserItem from "./UserItem";

const Users = ({ users, addUser }) => {
  console.log("Users Component Rendered");

  return (
    <>
      <div className="users">
        {users?.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
      <button id="add-button" onClick={addUser}>
        Add User
      </button>
    </>
  );
};

export default memo(Users);
