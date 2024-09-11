import React, { useEffect, useState, useContext } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";
import { AuthContext } from "../context/AuthContext";

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-semibold text-primary-color mb-8 text-center">
          🔎 모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default ResultPage;
