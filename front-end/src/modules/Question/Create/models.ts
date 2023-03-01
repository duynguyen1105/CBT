import { CategoryQuestionValue, TypeQuestionValue } from "models/question";

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
  category: CategoryQuestionValue;
  questionContent: string;
  questionType: TypeQuestionValue;
  answer: Answer[];
}
export interface Answer {
  displayOrder: number;
  content: string;
  score: string;
  penaltyScore: string;
  isCorrect: boolean;
  feedback: string;
  gradingGuide?: string;
}
