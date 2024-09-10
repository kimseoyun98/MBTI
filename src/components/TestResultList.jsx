import React, { useContext } from "react";
import TestResultItem from "./TestResultItem";
import { AuthContext } from "../context/AuthContext";

const TestResultList = ({ results, onUpdate, onDelete }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-4">
      {results
        .filter((result) => result.visibility || result.userId === user.id)
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TestResultList;
