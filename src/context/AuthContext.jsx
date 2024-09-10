import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 사용자 정보를 저장할 상태

  useEffect(() => {
    // 토큰 및 사용자 정보 로컬 스토리지에서 가져오기
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUserData = JSON.parse(userData); // userData가 유효한 JSON인지 확인
        setUser({ ...parsedUserData, accessToken: token }); // 로컬 스토리지에서 사용자 정보 가져오기
      } catch (error) {
        console.error("사용자 정보 파싱 중 오류 발생:", error);
        setUser(null); // 초기 상태로 되돌립니다.
      }
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("user", JSON.stringify(userData)); // 사용자 정보도 함께 저장
    setUser({ ...userData, accessToken: token }); // 사용자 정보 상태 업데이트
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user"); // 사용자 정보도 삭제
    setUser(null); // 사용자 정보 상태 초기화
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
