import { Dialog, Grid } from "@material-ui/core";
import Buttons from "components/Buttons";
import ButtonsOutline from "components/ButtonsOutline";
import Inputs from "components/Inputs";
import InputsRichtext from "components/InputsRichtext";
import Images from "config/images";
import produce from "immer";
import { Answer } from "modules/Question/Create/models";
import { useState } from "react";
import useStyles from "./styles";
//popupDeleteProps
interface PopupEditAnswerProps {
  onClickSuccess?: Function;
  onClickCancel?: Function;
  open: boolean;
  answer: Answer;
}

const PopupEditAnswer = (props: PopupEditAnswerProps) => {
  const { onClickSuccess, onClickCancel, open, answer } = props;
  const classes = useStyles();
  const [answerContent, setAnswerContent] = useState<Answer>(answer);
  // useEffect(() => {
  //   setAnswerContent(answer)
  // }, [answer])

  const handleSuccess = () => {
    onClickSuccess && onClickSuccess(answerContent);
  };

  const handleClose = () => {
    onClickCancel && onClickCancel();
  };

  const handleChangeContent = (data) => {
    setAnswerContent(
      produce((draft) => {
        draft.content = data;
      })
    );
  };
  const handleChangeScore = (event) => {
    setAnswerContent(
      produce((draft) => {
        draft.score = event.target.value;
      })
    );
  };
  const handleChangePenaltyScore = (event) => {
    setAnswerContent(
      produce((draft) => {
        draft.penaltyScore = event.target.value;
      })
    );
  };
  const handleChangeFeedback = (data) => {
    setAnswerContent(
      produce((draft) => {
        draft.feedback = data;
      })
    );
  };

  return (
    <Dialog open={open} keepMounted maxWidth="md" className={classes.dialog}>
      <Grid container spacing={2} className={classes.container}>
        <p className={classes.title}>Answer Edit</p>
        <Grid item md={12}>
          <InputsRichtext className="answer-content" onChange={handleChangeContent} name="answer" title="Answer Content" value={answerContent.content} />
        </Grid>
        <Grid item md={6}>
          <Inputs onChange={handleChangeScore} name="score" title="Score" value={answerContent.score} />
        </Grid>
        <Grid item md={6}>
          <Inputs onChange={handleChangePenaltyScore} name="penaltyScore" title="Penalty Score" value={answerContent.penaltyScore} />
        </Grid>
        <Grid item md={12}>
          <InputsRichtext className="feedback" onChange={handleChangeFeedback} name="feedback" title="Feedback" value={answerContent.feedback} />
        </Grid>
        <Grid item md={12} className={classes.groupBtn}>
          <ButtonsOutline children="Cancel" onClick={handleClose} icon={Images.CBTicXred} placementIcon />
          <Buttons children="Confirm" onClick={handleSuccess} icon={Images.CBTicCheckWhite} placementIcon />
        </Grid>
      </Grid>
    </Dialog>
  );
};
export default PopupEditAnswer;
