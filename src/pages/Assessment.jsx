import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Assessment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const studentData = location.state || {};
  const courseName = studentData.courseName || "Selected Course";

  const questions = [
    {
      question: "1. Python is a ____ ?",
      options: ["Programming Language", "Operating System", "Database", "Browser"],
      answer: "Programming Language",
    },
    {
      question: "2. React is mainly used for ____ ?",
      options: ["UI Development", "Networking", "Database", "OS"],
      answer: "UI Development",
    },
    {
      question: "3. HTML stands for ____ ?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Home Tool Markup Language",
        "None",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "4. CSS is used for ____ ?",
      options: ["Styling", "Database", "Logic", "Server"],
      answer: "Styling",
    },
    {
      question: "5. JavaScript is a ____ ?",
      options: ["Programming Language", "Database", "Server", "Compiler"],
      answer: "Programming Language",
    },
    {
      question: "6. Which is frontend framework?",
      options: ["React", "Django", "MySQL", "Node"],
      answer: "React",
    },
    {
      question: "7. Which is backend framework?",
      options: ["Django", "React", "CSS", "HTML"],
      answer: "Django",
    },
    {
      question: "8. Which is database?",
      options: ["MySQL", "React", "HTML", "CSS"],
      answer: "MySQL",
    },
    {
      question: "9. Which is styling language?",
      options: ["CSS", "Python", "Java", "C++"],
      answer: "CSS",
    },
    {
      question: "10. Which is scripting language?",
      options: ["JavaScript", "C", "C++", "Java"],
      answer: "JavaScript",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 sec

  const handleOptionChange = (index, option) => {
    setAnswers({
      ...answers,
      [index]: option,
    });
  };

  const calculateAndSubmit = () => {
    let score = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });

    navigate("/result", {
      state: {
        ...studentData,
        score,
        totalQuestions: questions.length,
      },
    });
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time is up! Test will be submitted automatically.");
      calculateAndSubmit();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-600">
              Assessment Test
            </h2>

            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-bold">
              Time Left: {formatTime()}
            </div>
          </div>

          <p className="mb-6 text-lg">
            <strong>Course:</strong> {courseName}
          </p>

          {questions.map((q, index) => (
            <div key={index} className="mb-6 border p-4 rounded-lg">
              <p className="font-semibold mb-3">{q.question}</p>

              {q.options.map((opt, i) => (
                <label key={i} className="block mb-2">
                  <input
                    type="radio"
                    name={`q-${index}`}
                    value={opt}
                    checked={answers[index] === opt}
                    onChange={() => handleOptionChange(index, opt)}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}

          <button
            onClick={calculateAndSubmit}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Submit Test
          </button>
        </div>
      </div>
    </>
  );
};

export default Assessment;