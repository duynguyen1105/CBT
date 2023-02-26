import { Grid, Select, MenuItem } from "@material-ui/core";
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
    const lists = question.answers.map((e) => ({ value: e.answerContent, label: e.answerContent }));
    // setListAnswer(lists);
    const newContent = question.questionContent.replaceAll(/<ans>(.*?)<\/ans>/g, (v) => {
      return `<Select>
              ${lists.map((e) => `<MenuItem value={"${e.value}"}>${e.label}</MenuItem>`).join("")}
              </Select>`;
    });
    setQuestionContent(newContent);
  }, [question]);
  console.log(questionContent);

  return (
    <div className={classes.container}>
      <p className={classes.title}>{`Title : ${question.questionTitle || "-"} `}</p>
      <p className={classes.feedbackBtn} onClick={() => setShowFeedback(!showFeedback)}>
        Show Feedback
      </p>
      <p className={classes.questionNum}>Question 1</p>
      <Grid item md={12}>
        <JsxParser bindings={{}} components={{ Select, MenuItem }} jsx={questionContent} />
      </Grid>
      {showFeedback &&
        question.answers.map((answer) => (
          <div className={classes.feedback}>
            <span>{answer.answerContent}</span>
            <div dangerouslySetInnerHTML={{ __html: answer.feedback }}></div>
          </div>
        ))}
    </div>
  );
};

export default DropdownSelectPreview;
