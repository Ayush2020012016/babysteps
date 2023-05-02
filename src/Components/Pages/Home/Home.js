import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";
import UserList from "../../UserList/UserList";
import SearchBar from "../../SearchBar/SearchBar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFilterUsers = (filteredUsers) => {
    setFilteredUsers(filteredUsers);
  };

  return (
    <div>
      <Navbar />
      <SearchBar users={users} setFilteredUsers={handleFilterUsers} />
      <UserList
        users={filteredUsers.length > 0 ? filteredUsers : users}
        setUsers={setUsers}
      />
    </div>
  );
};

export default Home;
