import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useStyle from "./styles";
import { IData } from "modules/Classes/models";

export interface ITestCard {
  dataTestCard: IData;
}

const TestCard: FC<ITestCard> = (props) => {
  const { dataTestCard } = props;
  const color = dataTestCard.score ? "249,169,90" : "59,135,80";
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const handleChangeTestBegin = () => {
    history.push(`${location.pathname}/${dataTestCard.id}`);
  };
  return (
    <Box className={classes.testCardContainer}>
      <Box
        style={{ backgroundColor: `rgba(${color}, 0.2)` }}
        className={classes.testCardLeft}
      >
        <Box
          style={{ backgroundColor: `rgba(${color}, 255)` }}
          className={classes.testCardLeftHeader}
        >
          <Typography className={classes.leftTitle}>
            {dataTestCard.category}
          </Typography>
        </Box>

        <Box
          style={{
            textAlign: "center",
            marginTop: 15,
          }}
        >
          <Typography style={{ fontSize: "14px", fontWeight: 700 }}>
            {dataTestCard.date}
          </Typography>
          <Typography
            style={{ fontSize: "9px", fontWeight: 400, color: "#999" }}
          >
            {dataTestCard.startTime} - {dataTestCard.endTime}
          </Typography>
        </Box>
        {dataTestCard.score && (
          <Box
            style={{
              display: "inline-flex",
              position: "relative",
              marginTop: 2,
              marginLeft: 25,
            }}
          >
            <CircularProgress
              variant="determinate"
              value={(dataTestCard.score / 10) * 100}
              style={{
                color: dataTestCard.score > 5 ? "#63e676" : "#e73031",
                transform: "rotate(90deg)",
              }}
            />

            <Box className={classes.boxScore}>
              <Box>
                <Typography
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #000",
                    fontSize: 10,
                    color: dataTestCard.score > 5 ? "#63e676" : "#e73031",
                  }}
                >
                  {dataTestCard.score.toString()}
                </Typography>
                <Typography style={{ fontSize: 10 }}>10</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box className={classes.testCardRight}>
        <Typography style={{ fontSize: "12px", fontWeight: 600 }}>
          {dataTestCard.title}
        </Typography>

        <Box style={{ display: "flex" }}>
          <Avatar style={{ width: 24, height: 24 }} />
          <Box className={classes.boxInfo}>
            <Typography
              style={{ fontSize: 10, lineHeight: 1, fontWeight: 600 }}
            >
              {dataTestCard.user.fullname}
            </Typography>
            <Typography style={{ fontSize: 8 }}>
              {dataTestCard.user.summary}
            </Typography>
          </Box>
        </Box>

        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button className={classes.btnStart} onClick={handleChangeTestBegin}>
            Start
          </Button>

          <Button className={classes.btnViewDetail}>View detail</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TestCard;
