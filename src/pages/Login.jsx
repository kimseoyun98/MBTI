import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext); // login 함수로 수정
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      const data = response.data;
      console.log("API 응답 데이터:", data);
      if (data.success) {
        const token = data.accessToken;
        const userData = {
          id: data.userId,
          nickname: data.nickname,
          avatar: data.avatar,
        };
        // userData 콘솔로 출력
        console.log("로그인 성공, 받아온 사용자 정보:", userData);

        // login 함수를 사용하여 인증 정보를 업데이트
        login(token, userData);
        navigate("/mypage");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 space-y-8">
      <div className="w-1/2 py-20 px-12 bg-gray-800 rounded shadow-lg">
        <h2 className="bg-gray-800 text-2xl font-semibold text-center mb-8">
          로그인 페이지입니다
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-gray-800 flex flex-col items-center justify-center gap-2"
        >
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력해주세요"
            className="w-full px-4 py-3 rounded-full text-sm "
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            className="w-full px-4 py-3 rounded-full text-sm "
          />
          <button
            type="submit"
            className="w-full text-sm h-10 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 shadow-md hover:shadow-lg mt-4"
          >
            로그인하기
          </button>
          <p className="text-sm mt-2">
            계정이 없으신가요?{" "}
            <Link to="/login" className="text-gray-400 hover:text-blue-300">
              회원가입
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
