export interface IQuestionListItem {
  createdAt: string;
  category: string;
  questionType: string;
  status: string;
  questionTitle: string;
  updatedAt: string;
  workspace: string;
  __v: number;
  _id: string;
}
export interface IQuestionFormItem {
  questionTitle: string;
  category: CategoryQuestionValue;
  questionContent: string;
  questionType: TypeQuestionValue;
  answer: IAnswer[];
}
export interface IAnswer {
  displayOrder: number;
  content: string;
  score: string;
  penaltyScore: string;
  isCorrect: boolean;
  feedback: string;
  gradingGuide?: string;
}

export enum QuestionStatusValue {
  Published = "PUBLISHED",
  Draft = "DRAFT",
}
export enum QuestionStatusLabel {
  Published = "Published",
  Draft = "Draft",
}
export const listQuestionStatus = [
  { value: QuestionStatusValue.Published, label: QuestionStatusLabel.Published },
  { value: QuestionStatusValue.Draft, label: QuestionStatusLabel.Draft },
];

export enum CategoryQuestionValue {
  TOEIC = "TOEIC",
  IELTS = "IELTS",
}
export const listQuestionCategory = [
  { value: CategoryQuestionValue.TOEIC, label: CategoryQuestionValue.TOEIC },
  { value: CategoryQuestionValue.IELTS, label: CategoryQuestionValue.IELTS },
];

export enum TypeQuestionValue {
  SelectOne = "SELECT_ONE",
  SelectMany = "SELECT_MANY",
  Matching = "MATCHING",
  DropdownSelect = "DROPDOWN_SELECT",
  FillInTheGaps = "FILL_IN_THE_GAPS",
  Essay = "ESSAY",
}
export enum TypeQuestionLabel {
  SelectOne = "Select One",
  SelectMany = "Select Many",
  Matching = "Matching",
  DropdownSelect = "Dropdown Select",
  FillInTheGaps = "Fill In The Gaps",
  Essay = "Essay",
}

export const listQuestionType = [
  { value: TypeQuestionValue.SelectOne, label: TypeQuestionLabel.SelectOne },
  { value: TypeQuestionValue.SelectMany, label: TypeQuestionLabel.SelectMany },
  { value: TypeQuestionValue.Matching, label: TypeQuestionLabel.Matching },
  { value: TypeQuestionValue.DropdownSelect, label: TypeQuestionLabel.DropdownSelect },
  { value: TypeQuestionValue.FillInTheGaps, label: TypeQuestionLabel.FillInTheGaps },
  { value: TypeQuestionValue.Essay, label: TypeQuestionLabel.Essay },
];

// const CATEGORY_QUESTION_VALUE = ["TOEIC", "IELTS"];
// const TYPE_QUESTION_VALUE = ["SELECT_ONE", "SELECT_MANY", "MATCHING", "DROPDOWN_SELECT", "FILL_IN_THE_GAPS", "ESSAY"];
// const STATUS_QUESTION_VALUE = ["DRAFT", "PUBLISHED"];
