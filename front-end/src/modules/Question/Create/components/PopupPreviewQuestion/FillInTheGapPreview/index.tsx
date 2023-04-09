import { Grid, TextField, Typography } from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import JsxParser from "react-jsx-parser";
import { IQuestionFormItem } from "models/question";
import useStyles from "./styles";

interface FillInTheGapPreviewProps {
  question: IQuestionFormItem;
  showFeedback: boolean;
}

const FillInTheGapPreview = (props: FillInTheGapPreviewProps) => {
  const { question, showFeedback } = props;
  const classes = useStyles();
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
    <Fragment>
      <Grid item md={12}>
        <JsxParser bindings={{ classes }} components={{ Grid, Typography, TextField }} jsx={questionContent} />
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
    </Fragment>
  );
};

export default FillInTheGapPreview;
