import { Grid, MenuItem, Select, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import JsxParser from "react-jsx-parser";
import { Question } from "../../../models";
import useStyles from "./styles";

interface DropdownSelectPreviewProps {
  question: Question;
}

const DropdownSelectPreview = (props: DropdownSelectPreviewProps) => {
  const { question } = props;
  const classes = useStyles();
  const [showFeedback, setShowFeedback] = useState(false);
  const [questionContent, setQuestionContent] = useState("");
  // const [listsAnswer, setListAnswer] = useState([{}]);

  useEffect(() => {
    const lists = question.answer.map((e) => ({ value: e.content, label: e.content }));
    // setListAnswer(lists);
    let n = 0;
    const newContent = question.questionContent
      .replaceAll(/<ans>(.*?)<\/ans>/g, (v) => {
        n++;
        return `<Grid component="span"><Select className={classes.selectAnswer} variant="outlined" defaultValue="${n}" inputProps={{ 'aria-label': 'Without label' }}><MenuItem value="${n}" disabled>${n}</MenuItem>${lists
          .map((e) => `<MenuItem value={"${e.value}"}>${e.label}</MenuItem>`)
          .join("")}</Select></Grid>`;
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
        <JsxParser bindings={{ classes }} components={{ Select, MenuItem, Grid, Typography }} jsx={questionContent} />
      </Grid>
      <Grid item md={12}>
        {showFeedback && (
          <>
            <Typography className={classes.title} style={{ marginTop: "50px" }}>
              Feedback:
            </Typography>
            {question.answer.map((answer, index) => (
              <div className={classes.feedback}>
                <span>{`${index + 1}. ${answer.content}: `}</span>
                <div dangerouslySetInnerHTML={{ __html: answer.feedback }}></div>
              </div>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
};

export default DropdownSelectPreview;
