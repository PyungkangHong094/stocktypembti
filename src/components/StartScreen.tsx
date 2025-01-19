import { Brain, LineChart, ArrowRight } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
    <div className="w-full max-w-3xl text-center space-y-8">
      {/* 메인 제목 */}
      <h1 className="text-4xl font-bold text-gray-900">💡 투자 성향 테스트</h1>
      <p className="text-xl text-gray-600">나만의 투자 스타일을 발견하고, MBTI 방식으로 분석해보세요!</p>

      {/* 2가지 기본 특징 + QR 다운로드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Feature icon={Brain} title="🔍 투자 성향 분석" description="당신의 자연스러운 투자 습관과 의사결정 패턴을 파악하세요." />
        {/* QR 코드 다운로드 섹션 */}
        <DownloadFeature 
          imageUrl="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdb0HnR%2FbtsLTs3fvm4%2FDCGPH2sSCpCgcFuRwtKki0%2Fimg.png" 
          title="📖 차트 공부 바로 원해?" 
          description="QR 코드를 스캔하거나 클릭해서 다운로드하세요!" 
          link="https://chartq.app/" 
        />
        <Feature icon={LineChart} title="📈 트레이딩 스타일" description="당신이 선호하는 시장 접근 방식과 리스크 감수 성향을 알아보세요." />
        
        
      </div>

      {/* 테스트 시작 버튼 */}
      <button 
        onClick={onStart} 
        className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform"
      >
        🚀 테스트 시작하기
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* 문항 안내 */}
      <p className="text-sm text-gray-500">📊 총 40문항 • 약 10분 소요</p>
    </div>
  </div>
);

/* 기본 Feature 박스 (아이콘 기반) */
const Feature = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

/* QR 코드 다운로드 Feature */
const DownloadFeature = ({ imageUrl, title, description, link }: { imageUrl: string, title: string, description: string, link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105">
    <img src={imageUrl} alt="QR Code" className="w-24 h-24 mx-auto mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </a>
);

export default StartScreen;
