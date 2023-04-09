import { Dialog, Grid } from "@material-ui/core";
import Buttons from "components/Buttons";
import ButtonsOutline from "components/ButtonsOutline";
import InputsRichtext from "components/InputsRichtext";
import Images from "config/images";
import produce from "immer";
import { IAnswer } from "models/question";
import { useState } from "react";
import useStyles from "./styles";
//popupDeleteProps
interface PopupEditFeedbackProps {
  onClickSuccess?: Function;
  onClickCancel?: Function;
  open: boolean;
  answer: IAnswer;
}

const PopupEditFeedback = (props: PopupEditFeedbackProps) => {
  const { onClickSuccess, onClickCancel, open, answer } = props;
  const classes = useStyles();
  const [answerContent, setAnswerContent] = useState<IAnswer>(answer);
  // useEffect(() => {
  //   setAnswerContent(answer)
  // }, [answer])

  const handleSuccess = () => {
    onClickSuccess && onClickSuccess(answerContent);
  };

  const handleClose = () => {
    onClickCancel && onClickCancel();
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
        <p className={classes.title}>Feedback Edit</p>
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
export default PopupEditFeedback;
