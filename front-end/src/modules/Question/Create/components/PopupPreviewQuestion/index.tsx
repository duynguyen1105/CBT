import { Dialog } from "@material-ui/core";
import { TypeQuestionValue } from "models/question";
import { useState } from "react";
import { IQuestionFormItem } from "models/question";
import DropdownSelectPreview from "./DropdownSelectPreview";
import FillInTheGapPreview from "./FillInTheGapPreview";
import MatchingPreview from "./MatchingPreview";
import SelectManyPreview from "./SelectManyPreview";
import SelectOnePreview from "./SelectOnePreview";
import useStyles from "./styles";

interface PopupPreviewQuestionProps {
  open: boolean;
  question: IQuestionFormItem;
  onClose: Function;
}

const PopupPreviewQuestion = (props: PopupPreviewQuestionProps) => {
  const { open, question, onClose } = props;
  const classes = useStyles();
  const [showFeedback, setShowFeedback] = useState(false);

  const renderPreviewQuestion = () => {
    switch (question.questionType) {
      case TypeQuestionValue.SelectOne:
        return <SelectOnePreview question={question} showFeedback={showFeedback} />;
      case TypeQuestionValue.SelectMany:
        return <SelectManyPreview question={question} showFeedback={showFeedback} />;
      case TypeQuestionValue.Matching:
        return <MatchingPreview question={question} showFeedback={showFeedback} />;
      case TypeQuestionValue.DropdownSelect:
        return <DropdownSelectPreview question={question} showFeedback={showFeedback} />;
      case TypeQuestionValue.FillInTheGaps:
        return <FillInTheGapPreview question={question} showFeedback={showFeedback} />;
      case TypeQuestionValue.Essay:
        return;
      default:
        break;
    }
  };

  return (
    <Dialog open={open} onClose={() => onClose()} maxWidth="lg" className={classes.dialog}>
      <div className={classes.container}>
        <p className={classes.title}>{`Title : ${question.questionTitle || "-"} `}</p>
        <p className={classes.feedbackBtn} onClick={() => setShowFeedback(!showFeedback)}>
          Show Feedback
        </p>
        <p className={classes.questionNum}>Question 1</p>
        {renderPreviewQuestion()}
      </div>
    </Dialog>
  );
};

export default PopupPreviewQuestion;
