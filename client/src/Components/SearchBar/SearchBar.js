import React, { useEffect, useState } from "react";
import "./Searchbar.css";

const SearchBar = ({ users, setFilteredUsers }) => {
  const [selectedOption, setSelectedOption] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //on enter the serach query will serach among the users
  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchQuery("");
      const filteredUsers = users.filter((user) => {
        console.log(selectedOption);
        if (selectedOption === "name") {
          return user.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return user.email.toLowerCase().includes(searchQuery.toLowerCase());
      });
      console.log(filteredUsers);
      setFilteredUsers(filteredUsers);
    }
  };

  return (
    <div className="SearchMasterContainer">
      <div className="SearchContainer">
        <span class="material-symbols-outlined">search</span>
        <input
          value={searchQuery}
          onKeyDown={(e) => handlekeyPress(e)}
          onChange={(e) => handleQueryChange(e)}
          type="text"
          placeholder="search users"
        />
        <div className="verticalbar"></div>
        <div className="searchby">
          <select value={selectedOption} onChange={(e) => handleChange(e)}>
            <option value="name">Name</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
