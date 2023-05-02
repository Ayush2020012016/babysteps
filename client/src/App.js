import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import UserCardList from "./Components/UserCardList/UserCardList";
import UserList from "./Components/UserList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCard from "./Components/UserCard/UserCard";
import Home from "./Components/Pages/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/user/:id" element={<UserCard />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
