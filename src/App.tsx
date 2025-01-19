import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import { questions } from "./data/questions";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isComplete, setIsComplete] = useState(false);

  console.log("App rendered - isStarted:", isStarted, "isComplete:", isComplete, "currentQuestion:", currentQuestion);

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setIsStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
  };

  if (!isStarted) {
    console.log("Rendering StartScreen");
    return <StartScreen onStart={() => setIsStarted(true)} />;
  }
  if (isComplete) {
    console.log("Rendering ResultScreen");
    return <ResultScreen answers={answers} onRestart={handleRestart} />;
  }

  console.log("Rendering QuestionScreen");

  return (
    <QuestionScreen
      question={questions[currentQuestion]}
      currentQuestionIndex={currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={answers[questions[currentQuestion].id]}
      onAnswer={handleAnswer}
      onPrevious={handlePrevious}
      onNext={() => setCurrentQuestion(prev => prev + 1)}
    />
  );
}

export default App;
