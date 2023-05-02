import React, { useEffect, useState } from "react";
import UserCardList from "../UserCardList/UserCardList";
import "./UserList.css";
import CircularProgress from "@mui/joy/CircularProgress";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

const UserList = ({ users, setUsers }) => {
  const [isloading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); //for pagination
  const [usersPerPage] = useState(3);

  useEffect(() => {
    try {
      //fetching the code of the users
      const getData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userData = await response.json();
        setUsers(userData);
        setIsloading(false);
      };
      //adding custom loading time
      setTimeout(getData, 500);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="userlistMasterContainer">
      {isloading ? (
        <div className="userlistloader">
          <CircularProgress size="lg" />
        </div>
      ) : (
        <div className="userlistContainer">
          {currentUsers.map((value, index) => {
            return <UserCardList key={index} value={value} />; //passing the value as a props to the usercardlist
          })}
        </div>
      )}
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default UserList;
