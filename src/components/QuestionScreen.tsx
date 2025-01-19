import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { Question } from "../data/questions";

interface QuestionScreenProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | undefined;
  onAnswer: (questionId: number, answerIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ 
  question, 
  currentQuestionIndex, 
  totalQuestions, 
  selectedAnswer, 
  onAnswer, 
  onPrevious, 
  onNext 
}) => {
  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Question {currentQuestionIndex + 1}/{totalQuestions}</h2>
            <span className="text-sm text-gray-500">{progress}% Complete</span>
          </div>
          <ProgressBar progress={progress} />
          <p className="text-lg mb-6">{question.text}</p>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(question.id, index)}
                className={`w-full p-3 text-left rounded-lg transition-colors ${
                  selectedAnswer === index ? "bg-blue-500 text-white" : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
