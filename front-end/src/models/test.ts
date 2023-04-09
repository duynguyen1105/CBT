export interface Test {
  id: number;
  testId: string;
  title: string;
  class: string;
  createdBy: string;
  creationTime: string;
  statusName: string;
}

export enum TestStatus {
  InProgress = "In Progress",
  Draft = "Draft",
  Finished = "Finished",
  Pending = "Pending",
  Closed = "Closed",
}

export const listTestStatus = [
  { id: TestStatus.Draft, name: TestStatus.Draft },
  { id: TestStatus.Finished, name: TestStatus.Finished },
  { id: TestStatus.InProgress, name: TestStatus.InProgress },
  { id: TestStatus.Pending, name: TestStatus.Pending },
];

export interface Description {
  content: string;
}
interface Question {
  isSingleQuestion: boolean;
  shuffleAnswer: boolean;
  score: number;
  questionContent: Question;
}

interface PageContent {
  content: string;
}

