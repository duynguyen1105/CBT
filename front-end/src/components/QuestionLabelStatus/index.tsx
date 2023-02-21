import clsx from "clsx";
import { QuestionStatusValue } from "models/question";
import useStyles from "./styles";

interface QuestionLabelStatusProps {
  typeStatus: string;
}

const QuestionLabelStatus = (props: QuestionLabelStatusProps) => {
  const classes = useStyles();
  const { typeStatus, ...rest } = props;

  return (
    <div className={clsx(typeStatus === QuestionStatusValue.Draft ? classes.circleYellow : "", typeStatus === QuestionStatusValue.Published ? classes.circleGreen : "")} {...rest}>
      {typeStatus}
    </div>
  );
};
export default QuestionLabelStatus;
