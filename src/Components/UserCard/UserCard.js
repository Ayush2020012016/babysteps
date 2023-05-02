import React, { useEffect, useState } from "react";
import "./UserCard.css";
import { useParams, useNavigate } from "react-router-dom";

const UserCard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        const userData = await response.json();
        setUser(userData);
        console.log(userData);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);
  const { name, username, email, address, phone, website, company } = user;
  const { street, city, geo, zipcode } = address || {};
  const { lat, lng } = geo || {};
  const { name: companyName, catchPhrase } = company || {};

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleReturn = () => {
    navigate("/");
  };
  return (
    <>
      <div class="userCard-Container">
        <div className="user-Card">
          <div className="user-Header">
            <div className="img-Container">
              <img src="/user.png" alt="" />
            </div>
            <div className="user-Name">{name}</div>
            <div className="user-Nameuser">{username}</div>
          </div>
          <div className="user-Content">
            <div className="user-Item">
              <span class="userLabel">Email:</span>
              <span class="userValue">{email}</span>
            </div>
            <div className="user-Item">
              {" "}
              <span class="userLabel">Phone:</span>
              <span class="userValue">{phone}</span>
            </div>
            <div className="user-Item">
              <span class="userLabel">Website:</span>
              <span class="userValue">{website}</span>
            </div>
            <div className="user-Item">
              <span class="userLabel">street:</span>
              <span class="userValue">{street}</span>
            </div>
            <div className="user-Item">
              <span class="userLabel">city:</span>
              <span class="userValue">{city}</span>
            </div>
            <div className="user-Item">
              <span class="userLabel">zipcode:</span>
              <span class="userValue">{zipcode}</span>
            </div>
            <div className="user-Item">
              <span class="userLabel">lat:</span>
              <span class="userValue">{lat}</span>
              <span style={{ marginLeft: "80px" }} class="userLabel">
                long:
              </span>
              <span class="userValue">{lng}</span>
            </div>

            <div className="user-Item">
              <span class="userLabel">Company:</span>
              <span class="userValue">{companyName}.</span>
            </div>
            <div className="user-Item ">
              <span class="userLabel">phrase:</span>
              <span class="userValue">{catchPhrase}.</span>
            </div>
            <div onClick={handleReturn} className="user-Item">
              <button className="user-Btn">Return</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCard;
