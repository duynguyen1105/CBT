import { Checkbox, Collapse, FormControl, FormControlLabel, RadioGroup } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import { Question } from "../../../models";
import useStyles from "./styles";

interface SelectManyPreviewProps {
  question: Question;
}

const SelectManyPreview = (props: SelectManyPreviewProps) => {
  const { question } = props;
  const classes = useStyles();
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className={classes.container}>
      <p className={classes.title}>{`Title : ${question.questionTitle || "-"} `}</p>
      <p className={classes.feedbackBtn} onClick={() => setShowFeedback(!showFeedback)}>
        Show Feedback
      </p>
      <p className={classes.questionNum}>Question 1</p>
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
    </div>
  );
};

export default SelectManyPreview;
