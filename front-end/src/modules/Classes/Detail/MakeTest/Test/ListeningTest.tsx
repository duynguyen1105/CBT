import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LeftTest from "modules/Classes/components/LeftTest";
import ListenerBar from "modules/Classes/components/ListenerBar";
import ABCD from "modules/Classes/components/Question/ABCD";
import IntoSpace from "modules/Classes/components/Question/IntoSpace";
import Multichoice from "modules/Classes/components/Question/Multichoice";
import { FC } from "react";
import useStyle from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import { IQuestionType, fakeQuestion } from "modules/Classes/models";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import DialogSubmit from "./DialogSubmit";

const ListeningTest: FC = () => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const changePage2 = () => {
    history.push(location.pathname.replace("listening-test", "reading-test"));
  };

  return (
    <Grid container>
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.header}>
          <div className={classes.avatar}>
            <p>Hi! Julia</p>
            <Avatar />
          </div>
        </Grid>

        <Grid item md={10} style={{ borderRadius: 5, paddingRight: 12 }}>
          <Box className={classes.title}>
            <Typography
              style={{ fontSize: 20, fontWeight: 600, paddingTop: 8 }}
            >
              GT Writing Test - Informal Letters
            </Typography>
          </Box>

          <Box style={{ padding: 8, backgroundColor: "#fff" }}>
            <Box style={{}}>
              <Typography style={{ fontWeight: 700, fontSize: 20 }}>
                Listening Part 1
              </Typography>

              <ListenerBar />
            </Box>

            <Box className={classes.content}>
              <Box
                style={{ display: "flex", alignItems: "center", marginTop: 12 }}
              >
                <Typography style={{ fontWeight: 700 }}>
                  Question 1-3
                </Typography>
                <Button
                  className={classes.btn}
                  variant="contained"
                  startIcon={<NoteOutlinedIcon />}
                >
                  Show Notepad
                </Button>
              </Box>
              <TextField
                style={{ width: "100%", paddingTop: 12 }}
                placeholder="Your draft go here ..."
                variant="outlined"
              />
              <Box style={{ marginTop: 12 }}>
                <Typography>Cricle the collect letter A, B, C or D</Typography>
                <Typography>Example</Typography>

                <Typography>
                  What is the Thommas's new home phone number?
                </Typography>
                <Typography>A 037 513 0307</Typography>
                <Typography>B 037 513 0307</Typography>
                <Typography style={{ fontWeight: 700 }}>
                  (C) 037 513 0307
                </Typography>
                <Typography>D 037 513 0307</Typography>
              </Box>

              {fakeQuestion.map(
                (item, index) =>
                  item.type === IQuestionType.ABCD && (
                    <ABCD order={index} data={item} key={index} />
                  )
              )}

              <Box
                style={{ display: "flex", alignItems: "center", marginTop: 12 }}
              >
                <Typography style={{ fontWeight: 700 }}>
                  Question 4-8
                </Typography>
                <Button
                  className={classes.btn}
                  variant="contained"
                  startIcon={<NoteOutlinedIcon />}
                >
                  Show Notepad
                </Button>
              </Box>
              <TextField
                style={{ width: "100%", paddingTop: 12 }}
                placeholder="Your draft go here ..."
                variant="outlined"
              />
              <Box style={{ padding: "8px 0" }}>
                <Typography style={{ fontStyle: "italic" }}>
                  Complete the notes below
                </Typography>
                <Typography>
                  Write
                  <span style={{ textTransform: "uppercase", color: "red" }}>
                    no more than three words and/or a number
                  </span>
                  for each answer
                </Typography>
              </Box>

              {fakeQuestion.map(
                (item, index) =>
                  item.type === IQuestionType.INTOSPACE && (
                    <IntoSpace data={item} key={index} />
                  )
              )}

              <Multichoice />

              <Box className={classes.boxBtnNext}>
                <Button
                  className={classes.btnNext}
                  variant="contained"
                  startIcon={<ArrowBackIcon />}
                >
                  Previous
                </Button>

                <Button
                  onClick={changePage2}
                  className={classes.btnNext}
                  variant="contained"
                  startIcon={<ArrowForwardIcon />}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item md={2} className={classes.leftTest}>
          <LeftTest />
        </Grid>

        <DialogSubmit />
      </Grid>
    </Grid>
  );
};
export default ListeningTest;
