import { Dialog } from "@material-ui/core";
import { TypeQuestionValue } from "models/question";
import { Question } from "../../models";
import DropdownSelectPreview from "./DropdownSelectPreview";
import MatchingPreview from "./MatchingPreview";
import SelectManyPreview from "./SelectManyPreview";
import SelectOnePreview from "./SelectOnePreview";
import useStyles from "./styles";

interface PopupPreviewQuestionProps {
  open: boolean;
  question: Question;
  onClose: Function;
}

const PopupPreviewQuestion = (props: PopupPreviewQuestionProps) => {
  const { open, question, onClose } = props;
  const classes = useStyles();

  const renderPreviewQuestion = () => {
    switch (question.questionType) {
      case TypeQuestionValue.SelectOne:
        return <SelectOnePreview question={question} />;
      case TypeQuestionValue.SelectMany:
        return <SelectManyPreview question={question} />;
      case TypeQuestionValue.Matching:
        return <MatchingPreview question={question} />;
      case TypeQuestionValue.DropdownSelect:
        return <DropdownSelectPreview question={question} />;
      case TypeQuestionValue.FillInTheGaps:
        return;
      case TypeQuestionValue.Essay:
        return;
      default:
        break;
    }
  };

  return (
    <Dialog open={open} onClose={() => onClose()} maxWidth="md" className={classes.dialog}>
      {renderPreviewQuestion()}
    </Dialog>
  );
};

export default PopupPreviewQuestion;
