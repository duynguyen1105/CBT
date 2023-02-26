import { TypeQuestionValue } from "models/question";

export enum KeyTable {
  IND = "displayOrder",
  Label = "label",
  Score = "score",
  PenaltyScore = "penaltyScore",
  IsCorrect = "isCorrect",
}

export const headerOption = [
  { name: "IND", width: 30, key: KeyTable.IND },
  { name: "Label", width: 600, key: KeyTable.Label },
  { name: "Score", width: 50, key: KeyTable.Score },
  { name: "Penalty Score", width: 50, key: KeyTable.PenaltyScore },
  { name: "Correct", width: 50, key: KeyTable.IsCorrect },
];

export interface Question {
  questionTitle: string;
  category: string;
  questionContent: string;
  questionType: TypeQuestionValue;
  answers: Answer[];
}
export interface Answer {
  displayOrder: number;
  answerContent: string;
  score: string;
  penaltyScore: string;
  isCorrect: boolean;
  feedback: string;
  gradingGuide?: string;
}
