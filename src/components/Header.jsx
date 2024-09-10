import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = ({ children }) => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return (
    <div>
      <header>
        <nav className="py-4 px-12 text-center flex justify-between items-center">
          <Link to="/" className="text-[20px] font-bold text-blue-500">
            Home
          </Link>
          <div className="space-x-6 text-[12px]">
            {user ? (
              <>
                <Link
                  to="/mypage"
                  className="text-gray-400 hover:text-blue-500"
                >
                  마이페이지
                </Link>
                <Link to="/test" className="text-gray-400 hover:text-blue-500">
                  테스트
                </Link>
                <Link
                  to="/results"
                  className="text-gray-400 hover:text-blue-500"
                >
                  결과보기
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-20 h-10 bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 shadow-md hover:shadow-lg"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-400 hover:text-blue-500">
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-400 hover:text-blue-500"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-2 main">{children}</main>
    </div>
  );
};

export default Header;
