import clsx from "clsx";
import { TestStatus } from "models/test";
import useStyles from "./styles";

interface TestLabelStatusProps {
  typeStatus: string;
}

const TestLabelStatus = (props: TestLabelStatusProps) => {
  const classes = useStyles();
  const { typeStatus, ...rest } = props;

  return (
    <div
      className={clsx(
        typeStatus === TestStatus.Pending ? classes.circleBlue : "",
        typeStatus === TestStatus.InProgress ? classes.circleGreen : "",
        typeStatus === TestStatus.Draft ? classes.circleYellow : "",
        typeStatus === TestStatus.Finished ? classes.circleRed : "",
        typeStatus === TestStatus.Closed ? classes.circleRed : ""
      )}
      {...rest}
    >
      {typeStatus}
    </div>
  );
};
export default TestLabelStatus;
