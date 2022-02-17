
export enum KeyTable {
  IND = 'displayOrder',
  Label = 'label',
  Score = 'score',
  IsCorrect = 'isCorrect',
}

export const headerOption = [
  { name: 'IND', width: 30, key: KeyTable.IND },
  { name: 'LABEL', width: 400, key: KeyTable.Label },
  { name: 'SCORE', width: 80, key: KeyTable.Score },
  { name: 'CORRECT', width: 80, key: KeyTable.IsCorrect },
]

export interface MatchingQuestion {
  questionTitle: string,
  category: string
  questionContent: string,
  answers: MatchingAnswer[]
}
export interface MatchingAnswer {
  displayOrder: number,
  answerContent: string,
  score: string,
  penaltyScore: string,
  isCorrect: boolean,
  feedback: string
}