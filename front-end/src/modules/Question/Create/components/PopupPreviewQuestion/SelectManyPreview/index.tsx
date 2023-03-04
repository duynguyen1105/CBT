import { Checkbox, Collapse, FormControl, FormControlLabel, RadioGroup } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Question } from "../../../models";
import useStyles from "./styles";

interface SelectManyPreviewProps {
  question: Question;
  showFeedback: boolean;
}

const SelectManyPreview = (props: SelectManyPreviewProps) => {
  const { question, showFeedback} = props;
  const classes = useStyles();

  return (
      <FormControl component="fieldset">
        <div dangerouslySetInnerHTML={{ __html: question.questionContent }}></div>
        <RadioGroup aria-label="question" name="question-detail" value={null} className={classes.answers}>
          {question.answer.map((answer, index) => {
            return (
              <div key={index}>
                <FormControlLabel control={<Checkbox checked={answer.isCorrect} color="primary" />} label={answer.content || "-"} />
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

export default SelectManyPreview;
