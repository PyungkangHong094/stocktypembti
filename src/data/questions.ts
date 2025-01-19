export interface Question {
    id: number;
    text: string;
    options: string[];
    category: 'L/S' | 'P/R' | 'T/C' | 'B/F';
  }
  
  export const questions: Question[] = [
    // 🟢 Long/Short Position (롱/숏 포지션) - 10개
    { id: 1, text: "시장이 올라갈 것 같을 때, 어떤 투자 방법을 선택할 거야?", options: ["가격이 오를 거라 믿고 사기", "상황 보고 결정하기", "가격이 떨어질 수도 있으니 미리 팔기"], category: "L/S" },
    { id: 2, text: "시장이 많이 떨어질 때 주된 전략은 뭐야?", options: ["지금 싸게 사서 나중에 오를 때 팔기", "일단 가만히 있기", "더 떨어질 것 같으면 미리 팔기"], category: "L/S" },
    { id: 3, text: "시장이 크게 오르락내리락할 때 어떤 방법이 좋아?", options: ["오를 거라 생각하고 사기", "일단 기다려 보기", "떨어질 거라 보고 팔기"], category: "L/S" },
    { id: 4, text: "좋은 경제 뉴스가 나왔을 때 어떻게 할 거야?", options: ["바로 사기", "뉴스를 더 확인한 후 결정하기", "너무 많이 올랐을 수도 있으니 팔기"], category: "L/S" },
    { id: 5, text: "시장 분위기가 안 좋을 때 어떻게 대응할 거야?", options: ["반등할 거라 믿고 사기", "조금 더 기다려 보기", "더 떨어질 수도 있으니 팔기"], category: "L/S" },
    { id: 6, text: "중요한 가격선이 깨졌을 때 어떻게 할 거야?", options: ["싸게 사서 기다리기", "일단 상황 지켜보기", "더 떨어질 것 같으면 팔기"], category: "L/S" },
    { id: 7, text: "시장이 너무 많이 떨어졌을 때 어떻게 할 거야?", options: ["다시 오를 거라 보고 사기", "일단 기다려 보기", "더 떨어질 수도 있으니 팔기"], category: "L/S" },
    { id: 8, text: "시장이 계속 오르다가 잠깐 내려갈 때 어떻게 할 거야?", options: ["더 오를 거라 믿고 사기", "더 내려가는지 지켜보기", "이제 내려갈 수도 있으니 팔기"], category: "L/S" },
    { id: 9, text: "시장이 조용할 때 어떤 투자 방법을 선호해?", options: ["조금씩 사두기", "일단 기다려 보기", "미리 팔아두기"], category: "L/S" },
    { id: 10, text: "가격이 높은 곳에 도달했을 때 어떤 전략이 좋아?", options: ["더 오를 거라 기대하고 사기", "움직임을 지켜보기", "이제 내려갈 수도 있으니 팔기"], category: "L/S" },

    // 🔵 Profit/Risk Focus (수익/리스크 성향) - 10개
    { id: 11, text: "투자 결정을 내릴 때 가장 중요하게 생각하는 건 뭐야?", options: ["이길 확률이 높은 거", "위험과 이익의 균형", "수익을 많이 낼 수 있는 거"], category: "P/R" },
    { id: 12, text: "트레이딩 결과에서 뭐가 더 중요해?", options: ["계속해서 이길 확률", "위험과 이익의 균형", "큰 수익을 낼 기회"], category: "P/R" },
    { id: 13, text: "손실을 줄일 때 어떻게 해?", options: ["작은 손실을 여러 번 보기", "중간 정도 손실은 감당하기", "손실이 커도 버티기"], category: "P/R" },
    { id: 14, text: "수익을 낼 때 어떤 방법이 좋아?", options: ["작은 수익을 자주 얻기", "조금씩 수익을 나눠서 얻기", "한 번에 큰 수익을 노리기"], category: "P/R" },
    { id: 15, text: "위험을 관리할 때 가장 중요한 게 뭐야?", options: ["이길 확률 높이기", "위험 대비 이익 비율", "최대한 많은 이익 내기"], category: "P/R" },
    { id: 16, text: "투자 금액을 정할 때 뭐가 제일 중요해?", options: ["이길 확률", "위험 대비 예상 수익", "얼마나 많은 돈을 벌 수 있는지"], category: "P/R" },
    { id: 17, text: "트레이딩 계획을 세울 때 가장 중요하게 생각하는 건 뭐야?", options: ["승률이 높은 전략", "위험 관리", "최대한 많은 돈을 벌 수 있는 전략"], category: "P/R" },
    { id: 18, text: "연속으로 손실이 났을 때 어떻게 해?", options: ["이길 확률을 높이는 것에 집중", "위험을 다시 평가", "손실을 빨리 복구하려고 시도"], category: "P/R" },
    { id: 19, text: "레버리지를 쓸 때 어떤 전략을 써?", options: ["안정적으로 이길 확률 높이기", "위험을 조절하면서 투자", "큰 수익을 노리기"], category: "P/R" },
    { id: 20, text: "수익이 날 때 어떤 전략을 선호해?", options: ["빠르게 이익 확정", "일부 이익을 먼저 챙기기", "최대한 수익을 극대화하기"], category: "P/R" },

    // 🟠 Trend/Counter-trend (추세/역추세) - 10개
    { id: 21, text: "시장의 추세를 어떻게 활용할 거야?", options: ["추세를 따라가기", "상황에 따라 다르게 하기", "추세 반전을 노리기"], category: "T/C" },
    { id: 22, text: "시장이 가만히 있을 때(횡보) 어떻게 할 거야?", options: ["추세가 생길 때까지 기다리기", "상황에 따라 움직이기", "정해진 범위 안에서 사고팔기"], category: "T/C" },
    { id: 23, text: "강한 추세가 있을 때 어떤 방법을 선호해?", options: ["추세를 따라가기", "일부 이익 실현하기", "반전을 노려보기"], category: "T/C" },
    { id: 24, text: "추세가 약해질 때 어떻게 할 거야?", options: ["추세가 유지될 거라 보고 기다리기", "다시 상황을 분석하기", "반전 가능성 준비하기"], category: "T/C" },
    { id: 25, text: "기술적 지표가 너무 많이 샀거나(과매수) 너무 많이 팔렸다고(과매도) 할 때?", options: ["추세가 계속될 거라 생각하기", "신중하게 접근하기", "반전을 노려보기"], category: "T/C" },
    { id: 26, text: "새로운 추세가 생길 때 어떻게 할 거야?", options: ["빠르게 따라가기", "조심스럽게 들어가기", "반전 가능성을 생각하기"], category: "T/C" },
    { id: 27, text: "추세선이 깨질 때 어떤 전략을 선호해?", options: ["추세가 다시 만들어질 때까지 기다리기", "일단 지켜보기", "반전 방향으로 투자하기"], category: "T/C" },
    { id: 28, text: "장기 추세랑 단기 추세가 반대일 때 어떻게 할 거야?", options: ["장기 추세를 더 중요하게 보기", "각각 따로 분석하기", "단기 반전을 노려보기"], category: "T/C" },
    { id: 29, text: "시장이 움직이는 힘(모멘텀)이 변할 때 어떻게 할 거야?", options: ["기존 추세를 유지하기", "상황에 맞춰 대응하기", "반전 가능성 준비하기"], category: "T/C" },
    { id: 30, text: "추세가 얼마나 강한지(추세 강도)를 볼 때 뭘 주로 참고해?", options: ["모멘텀 지표 보기", "여러 시간대 분석하기", "반전 신호 찾기"], category: "T/C" },

    // 🔴 Breakout/Retest (돌파/되돌림) - 10개
    { id: 31, text: "진입 포인트를 정할 때 어떤 방식을 선호해?", options: ["중요한 가격선을 돌파할 때", "상황에 따라 다르게", "지지선이나 저항선을 다시 테스트할 때"], category: "B/F" },
    { id: 32, text: "어떤 진입 전략을 더 좋아해?", options: ["강한 힘(모멘텀)으로 돌파할 때", "상황에 따라 다르게 접근", "지지선이나 저항선 테스트할 때"], category: "B/F" },
    { id: 33, text: "가격이 중요한 구간에 도달했을 때 어떤 전략을 선호해?", options: ["돌파할 때까지 기다리기", "상황을 분석하기", "되돌림(가격이 다시 내려오길) 기다리기"], category: "B/F" },
    { id: 34, text: "거래량이 갑자기 많아질 때 어떤 진입을 선호해?", options: ["돌파될 때 바로 진입", "일단 지켜보기", "되돌림될 때 진입"], category: "B/F" },
    { id: 35, text: "중요한 뉴스가 나오기 전에 어떤 진입 전략을 써?", options: ["미리 돌파될 거라고 보고 진입", "뉴스가 나온 후 진입", "되돌림될 때 진입"], category: "B/F" },
    { id: 36, text: "차트 패턴이 완성됐을 때 어떤 진입을 선호해?", options: ["바로 돌파될 때 진입", "확인한 후 진입", "되돌림될 때 진입"], category: "B/F" },
    { id: 37, text: "지지선이나 저항선 근처에서 어떤 전략을 써?", options: ["돌파될 때 진입", "레벨에서 기다리기", "되돌림될 때 진입"], category: "B/F" },
    { id: 38, text: "시장이 많이 움직일 때(변동성이 높을 때) 어떻게 진입해?", options: ["돌파될 때 진입", "변동성을 분석한 후 진입", "되돌림될 때 기다리기"], category: "B/F" },
    { id: 39, text: "트렌드 라인(추세선) 근처에서 어떤 진입을 선호해?", options: ["돌파될 때 진입", "추세를 분석한 후 진입", "되돌림될 때 진입"], category: "B/F" },
    { id: 40, text: "주요 이동평균선 근처에서 어떤 진입을 선호해?", options: ["돌파될 때 진입", "조금 더 신중하게 관찰하기", "되돌림될 때 기다리기"], category: "B/F" }    
  ];
  