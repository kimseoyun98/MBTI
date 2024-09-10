import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import TestResultItem from "../components/TestResultItem";
import { getTestResults } from "../api/testResults";
import { Link } from "react-router-dom";

const TestResult = () => {
  const [result, setResult] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchResults = async () => {
    const data = await getTestResults();

    const userResult = data.find((item) => item.userId === user.id);

    setResult(userResult);
  };

  useEffect(() => {
    fetchResults();
  });

  // 결과가 없으면 로딩 메시지 또는 "결과 없음" 표시
  if (!result) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/2 flex flex-col items-center justify-center gap-4 mt-8">
        <h1 className="text-3xl font-semibold text-primary-color mb-6 text-center">
          테스트 결과: {result.result}
        </h1>
        <TestResultItem
          key={result.id}
          result={result}
          user={user}
          isHidden={true}
        />
        <Link
          to="/results"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4 text-center"
        >
          결과 페이지로 이동하기
        </Link>
      </div>
    </div>
  );
};

export default TestResult;
