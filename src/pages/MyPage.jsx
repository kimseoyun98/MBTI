import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [newNickname, setNewNickname] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const accessToken = user?.accessToken;

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      const fetchUserInfo = async () => {
        try {
          console.log("사용자 토큰:", accessToken);
          const response = await axios.get(
            "https://moneyfulpublicpolicy.co.kr/user",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setUserInfo(response.data);
        } catch (error) {
          console.error("Failed to fetch user info:", error);
        }
      };
      fetchUserInfo();
    }
  }, [user, navigate, accessToken]);

  const handleNicknameChange = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", newNickname);

      const response = await axios.patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setUserInfo((prevState) => ({
          ...prevState,
          nickname: response.data.nickname,
        }));

        alert("닉네임이 변경되었습니다.");
        setNewNickname("");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to update nickname:", error);
      alert("닉네임 변경에 실패했습니다.");
    }
  };

  if (!userInfo) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center mt-12 space-y-12">
      <div className="text-3xl">
        <p>{userInfo.nickname}님 안녕하세요 🥰</p>
      </div>
      <div className="w-1/2 space-y-8 p-12 bg-gray-800 rounded shadow-lg">
        <div className="flex flex-col items-center justify-center bg-gray-800">
          <h2 className="bg-gray-800 text-2xl font-semibold text-center my-2">
            프로필 수정
          </h2>
          <div className="bg-gray-800 text-m font-light flex flex-col items-center my-4">
            <p className="bg-gray-800">아이디: {userInfo.id}</p>

            <p className="bg-gray-800">닉네임: {userInfo.nickname}</p>
          </div>
          <form
            onSubmit={handleNicknameChange}
            className="w-full mt-4 bg-gray-800"
          >
            <input
              type="text"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              placeholder="새 닉네임"
              className="w-full px-4 py-3 rounded-full text-sm"
            />
            <button
              type="submit"
              className="w-full mt-4 text-sm h-10 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 shadow-md hover:shadow-lg"
            >
              프로필 업데이트
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
