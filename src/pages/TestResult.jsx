// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import TestResultItem from "../components/TestResultItem";
// import { getTestResults } from "../api/testResults";

// const TestResult = () => {
//   const [result, setResult] = useState(null); // 특정 결과를 저장하기 위해 초기 상태를 null로 설정
//   const { user } = useContext(AuthContext); // 현재 사용자의 정보를 가져옴

//   const fetchResults = async () => {
//     const data = await getTestResults();

//     // 특정 조건(예: userId가 현재 사용자와 일치하는 결과)을 만족하는 첫 번째 결과 찾기
//     const userResult = data.find((item) => item.userId === user.id);

//     setResult(userResult); // 찾은 결과를 상태로 설정
//   };

//   useEffect(() => {
//     fetchResults();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-semibold text-primary-color mb-6 text-center">
//         테스트 결과: {result.result}
//       </h1>
//       <TestResultItem key={result.id} result={result} isHidden={true} />
//     </div>
//   );
// };

// export default TestResult;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import TestResultItem from "../components/TestResultItem";
import { getTestResults } from "../api/testResults";

const TestResult = () => {
  const [result, setResult] = useState(null); // 특정 결과를 저장하기 위해 초기 상태를 null로 설정
  const { user } = useContext(AuthContext); // 현재 사용자의 정보를 가져옴

  const fetchResults = async () => {
    const data = await getTestResults();

    // 특정 조건(예: userId가 현재 사용자와 일치하는 결과)을 만족하는 첫 번째 결과 찾기
    const userResult = data.find((item) => item.userId === user.id);

    setResult(userResult); // 찾은 결과를 상태로 설정
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
        <TestResultItem key={result.id} result={result} isHidden={true} />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4"
        >
          결과 페이지로 이동하기
        </button>
      </div>
    </div>
  );
};

export default TestResult;
