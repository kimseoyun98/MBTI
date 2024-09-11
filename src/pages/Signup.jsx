import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          password,
          nickname,
        }
      );
      const data = response.data;
      if (data.success) {
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 space-y-8">
      <div className="w-1/2 py-20 px-12 bg-gray-800 rounded shadow-lg">
        <h2 className="bg-gray-800 text-2xl font-semibold text-center mb-8">
          회원가입 페이지입니다
        </h2>
        <form
          className="mt-4 bg-gray-800 flex flex-col items-center justify-center gap-2"
          onSubmit={handleSubmit}
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
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임 입력해주세요"
            className="w-full px-4 py-3 rounded-full text-sm "
          />
          <button
            type="submit"
            className="w-full text-sm h-10 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 shadow-md hover:shadow-lg mt-4"
          >
            회원가입
          </button>
          <p className="text-sm mt-2 bg-gray-800">
            이미 계정이 있으신가요?{" "}
            <Link to="/Login" className="text-gray-400 hover:text-blue-300">
              로그인
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
