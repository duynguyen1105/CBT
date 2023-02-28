import { Grid, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import JsxParser from "react-jsx-parser";
import { Question } from "../../../models";
import useStyles from "./styles";

interface FillInTheGapPreviewProps {
  question: Question;
}

const FillInTheGapPreview = (props: FillInTheGapPreviewProps) => {
  const { question } = props;
  const classes = useStyles();
  const [showFeedback, setShowFeedback] = useState(false);
  const [questionContent, setQuestionContent] = useState("");
  // const [listsAnswer, setListAnswer] = useState([{}]);

  useEffect(() => {
    // const lists = question.answers.map((e) => ({ value: e.answerContent, label: e.answerContent }));
    // setListAnswer(lists);
    const newContent = question.questionContent
      .replaceAll(/<ans>(.*?)<\/ans>/g, (v) => {
        return `<Grid component="span"><TextField className={classes.inputAnswer} variant="outlined"></TextField></Grid>`;
      })
      .replaceAll("<p", '<Typography component="span"')
      .replaceAll("</p", "</Typography");

    setQuestionContent(newContent);
  }, [question]);

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>{`Title : ${question.questionTitle || "-"} `}</Typography>
      <Typography className={classes.feedbackBtn} onClick={() => setShowFeedback(!showFeedback)}>
        Show Feedback
      </Typography>
      <Typography className={classes.questionNum}>Question 1</Typography>
      <Grid item md={12}>
        <JsxParser bindings={{ classes }} components={{ Grid, Typography, TextField }} jsx={questionContent} />
      </Grid>
      <Grid item md={12}>
        {showFeedback && (
          <>
            <Typography className={classes.title} style={{ marginTop: "50px" }}>
              Feedback:
            </Typography>
            {question.answers.map((answer, index) => (
              <div className={classes.feedback}>
                <span>{`${index + 1}. ${answer.answerContent}: `}</span>
                <div dangerouslySetInnerHTML={{ __html: answer.feedback }}></div>
              </div>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
};

export default FillInTheGapPreview;
