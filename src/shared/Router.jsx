import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyPage from "../pages/MyPage";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";
import TestResult from "../pages/TestResult";
import styled from "styled-components";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  // 로그인이 되어있지 않으면 login 페이지로 리다이렉트
  return user ? <Outlet /> : <Navigate to="/login" />;
};

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
const PublicRoute = () => {
  const { user } = useContext(AuthContext);

  // 로그인이 되어있는 사용자는 mypage로 리다이렉트
  return !user ? <Outlet /> : <Navigate to="/mypage" />;
};

const SharedRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route element={<PublicRoute />}>
        {/* 로그인과 회원가입은 로그인이 필요 없는 페이지 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<PrivateRoute />}>
        {/* 마이페이지, 테스트 페이지, 결과 페이지는 로그인 필요 */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<TestResult />} />
        <Route path="/results" element={<ResultPage />} />
      </Route>
    </Routes>
  </Router>
);

export default SharedRouter;
