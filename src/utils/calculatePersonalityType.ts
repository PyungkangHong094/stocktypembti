import { questions } from "../data/questions";

export function calculatePersonalityType(answers: { [key: number]: number }): string {
  let lsScore = 0, prScore = 0, tcScore = 0, bfScore = 0;

  questions.forEach(question => {
    const answer = answers[question.id];
    if (answer === undefined) return;

    const score = answer === 0 ? 1 : answer === 2 ? -1 : 0;

    switch (question.category) {
      case 'L/S': lsScore += score; break;
      case 'P/R': prScore += score; break;
      case 'T/C': tcScore += score; break;
      case 'B/F': bfScore += score; break;
    }
  });

  return `${lsScore >= 0 ? 'L' : 'S'}${prScore >= 0 ? 'P' : 'R'}${bfScore >= 0 ? 'B' : 'F'}${tcScore >= 0 ? 'T' : 'C'}`;
}
