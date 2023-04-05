export enum WhenDoingTestOption {
  ScoreReview = "Score Review",
  FeedbackOfCorrectAnswer= "Feedback of correct answer",
  FeedbackOfUnCorrectAnswer = "Feedback of uncorrect answer",
  CorrectAnswer = "Correct answer",
  TakeNote = "Take note",
  MarkQuestionToReview= "Mark question to review",
}
export enum AfterSubmitTestOption {
  ScoreReview = "Score Review",
  FeedbackOfCorrectAnswer= "Feedback of correct answer",
  FeedbackOfUnCorrectAnswer = "Feedback of uncorrect answer",
  CorrectAnswer = "Correct answer",
  TestReview = "Test review",
}

export enum AfterTestClosedOption {
  ScoreReview = "Score Review",
  FeedbackOfCorrectAnswer= "Feedback of correct answer",
  FeedbackOfUnCorrectAnswer = "Feedback of uncorrect answer",
  CorrectAnswer = "Correct answer",
  TestReview = "Test review",
}

export const WhenDoingTestOptionDefault = [
  { label: WhenDoingTestOption.CorrectAnswer, value: false },
  { label: WhenDoingTestOption.FeedbackOfCorrectAnswer, value: false },
  { label: WhenDoingTestOption.FeedbackOfUnCorrectAnswer, value: false },
  { label: WhenDoingTestOption.CorrectAnswer, value: false },
  { label: WhenDoingTestOption.TakeNote, value: false },
  { label: WhenDoingTestOption.MarkQuestionToReview, value: false },
]

export const AfterSubmitTestOptionDefault = [
  { label: AfterSubmitTestOption.CorrectAnswer, value: false },
  { label: AfterSubmitTestOption.FeedbackOfCorrectAnswer, value: false },
  { label: AfterSubmitTestOption.FeedbackOfUnCorrectAnswer, value: false },
  { label: AfterSubmitTestOption.CorrectAnswer, value: false },
  { label: AfterSubmitTestOption.TestReview, value: false },
]

export const AfterTestClosedOptionDefault = [
  { label: AfterTestClosedOption.CorrectAnswer, value: false },
  { label: AfterTestClosedOption.FeedbackOfCorrectAnswer, value: false },
  { label: AfterTestClosedOption.FeedbackOfUnCorrectAnswer, value: false },
  { label: AfterTestClosedOption.CorrectAnswer, value: false },
  { label: AfterTestClosedOption.TestReview, value: false },
]