import React from "react";

const UserItem = ({ user }) => {
  console.log("UserItemComp Rendering");
  return (
    <div className="useritem">
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`}
        alt=""
      />
      {user.name}
    </div>
  );
};

export default UserItem;
