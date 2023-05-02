import React from "react";
import "./UserCardList.css";
import { useNavigate } from "react-router-dom";

const UserCardList = (props) => {
  const navigate = useNavigate();
  const { id, name, username, email, address, phone, website, company } =
    props.value;

  const handleclick = () => {
    console.log(id);
    navigate(`/user/${id}`);
  };
  return (
    <>
      <div className="userCard">
        <div className="userHeader">
          <div className="imgContainer">
            <img src="/user.png" alt="" />
          </div>
          <div className="userName">{name}</div>
          <div className="userNameuser">{username}</div>
        </div>
        <div className="userContent">
          <div className="userItem">
            <span class="userLabel">Email:</span>
            <span class="userValue">{email}</span>
          </div>
          <div className="userItem">
            <span class="userLabel">Phone:</span>
            <span class="userValue">{phone}</span>
          </div>
          {/* <div className="userItem">
            <span class="userLabel">Website:</span>
            <span class="userValue">{website}</span>
          </div> */}
          <div className="userItem">
            <span class="userLabel">Company:</span>
            <span class="userValue">{company.name}.</span>
          </div>
          <div onClick={handleclick} className="userItem">
            <button className="userBtn">View</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCardList;
