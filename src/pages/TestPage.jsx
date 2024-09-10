import React, { useContext } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const TestPage = () => {
  const { user, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };

    await createTestResult(resultData, accessToken);
    navigate("/result");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl text-center font-bold mb-8">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
