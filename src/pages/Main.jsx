import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const token = localStorage.getItem("accessToken");

  return (
    <div className="h-screen flex flex-col items-center justify-center -mt-8 gap-12">
      <h1 className="text-4xl font-bold">무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <>
        {!token ? (
          <Link
            to="/login"
            className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md hover:shadow-lg"
          >
            로그인하러 가기
          </Link>
        ) : (
          <Link
            to="/test"
            className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md hover:shadow-lg"
          >
            내 성격 알아보러 가기
          </Link>
        )}
      </>
    </div>
  );
};

export default Main;
