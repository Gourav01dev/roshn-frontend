import React from "react";
import UserTable from "../components/userTable/UserTable.tsx";

const UserList: React.FC = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} data-testid="user-table">
      <h1 style={{ textAlign: "center" }}>User List Data</h1>
      <UserTable />
    </div>
  );
};

export default UserList;



