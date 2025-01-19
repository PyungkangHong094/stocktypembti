import { Copy, Twitter } from "lucide-react";
import { personalityTypes } from "../data/personalityTypes";
import { calculatePersonalityType } from "../utils/calculatePersonalityType";
import { useState } from "react";

interface ResultScreenProps {
  answers: { [key: number]: number };
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ answers, onRestart }) => {
  const personalityType = calculatePersonalityType(answers);
  const description = personalityTypes[personalityType] || "Unknown Type";
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;
  const shareText = `🚀 나의 투자 MBTI는 ${personalityType}!\n"${description}"\n\n🔗 테스트 링크: ${currentUrl}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error("복사 실패:", err));
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">당신의 투자 성향</h2>
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            {personalityType.split("").map((letter, index) => (
              <span key={index} className="text-2xl font-bold text-blue-700">{letter}</span>
            ))}
          </div>
          <p className="text-xl text-gray-700 mt-4">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <InfoCard title="포지션 성향" value={personalityType[0] === 'L' ? '롱 포지션 선호' : '숏 포지션 선호'} />
          <InfoCard title="트레이딩 목표" value={personalityType[1] === 'P' ? '승률 중심' : '손익비 중심'} />
          <InfoCard title="진입 스타일" value={personalityType[2] === 'B' ? '돌파 매매' : '리테스트 매매'} />
          <InfoCard title="추세 접근법" value={personalityType[3] === 'T' ? '추세 추종' : '역추세 매매'} />
        </div>

        {/* 공유 버튼 */}
        <div className="flex flex-col space-y-4 mb-6">
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center justify-center px-6 py-3 text-lg font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Copy className="w-5 h-5 mr-2" />
            {copied ? "✅ 복사 완료!" : "결과 복사하기"}
          </button>

          <a
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Twitter className="w-5 h-5 mr-2" />
            트위터에서 공유하기
          </a>
        </div>

        {/* 테스트 다시 하기 버튼 */}
        <button
          onClick={onRestart}
          className="w-full flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-lg transition-colors"
          style={{ backgroundColor: "#2d9181" }}
        >
          테스트 다시 하기
        </button>

        
      </div>
      {/* Navigation Banner */}
      <div className="mt-8 border-t pt-6">
      <a 
        href="https://chartq.app/" 
        className="w-full flex items-center justify-between p-6 rounded-lg hover:opacity-90 transition-colors"
        style={{ backgroundColor: "#0d987e" }}
      >
        <div className="flex items-center flex-1">
          <img 
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYMsxn%2FbtsLw5vgiM7%2FCJgt39w3SbYaAkUik2R8Z0%2Fimg.png" 
            alt="Course Logo" 
            className="w-60 h-20 rounded-lg object-cover"
          />
          <div className="ml-6">
            <h3 className="text-xl font-semibold text-white">Next Trading Course</h3>
            <p className="text-white opacity-90 mt-1">트레이딩의 기초부터 실전까지 배우는 곳!</p>
          </div>
        </div>
      </a>
      </div>
      
    </div>
  );
};

const InfoCard = ({ title, value }: { title: string, value: string }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{value}</p>
  </div>
);

export default ResultScreen;
