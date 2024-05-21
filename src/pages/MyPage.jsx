import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };
    fetchUserInfo();
  }, [isAuthenticated, navigate]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>My Page</h2>
      <p>ID: {userInfo.id}</p>
      <p>Nickname: {userInfo.nickname}</p>
    </div>
  );
};

export default MyPage;
