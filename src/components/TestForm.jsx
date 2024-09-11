import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-12 p-8 bg-gray-100 rounded shadow-lg"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-4">
          <p className="font-semibold text-xl mb-4 p-4">{q.question}</p>
          <div className="flex flex-col space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`flex items-center cursor-pointer p-3 border-2 rounded-md transition ${
                  answers[index] === option
                    ? "bg-blue-100 text-blue-500 border-blue-300" // 선택된 상태
                    : "text-black border-gray-200 hover:bg-gray-200" // 선택되지 않은 상태
                }`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                  className="hidden"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full h-16 text-xl bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
