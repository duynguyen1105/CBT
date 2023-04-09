import { Collapse, FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { IQuestionFormItem } from "models/question";

import useStyles from "./styles";

interface SelectOnePreviewProps {
  question: IQuestionFormItem;
  showFeedback: boolean;
}

const SelectOnePreview = (props: SelectOnePreviewProps) => {
  const { question, showFeedback } = props;
  const classes = useStyles();

  return (
    <FormControl component="fieldset">
      <div dangerouslySetInnerHTML={{ __html: question.questionContent }}></div>
      <RadioGroup aria-label="question" name="question-detail" value={null} className={classes.answers}>
        {question.answer.map((answer, index) => {
          return (
            <div key={index}>
              <FormControlLabel control={<Radio checked={answer.isCorrect} color="primary" />} label={<div dangerouslySetInnerHTML={{ __html: answer.content }}></div>} />
              <Collapse className={classes.feedback} in={showFeedback}>
                <Alert severity={answer.isCorrect ? "success" : "error"}>
                  <div dangerouslySetInnerHTML={{ __html: answer.feedback }}></div>
                </Alert>
              </Collapse>
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default SelectOnePreview;
