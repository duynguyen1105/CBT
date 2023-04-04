import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import useStyle from "./styles";
import BottomBar from "modules/Classes/components/BottomBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MicNoneIcon from "@material-ui/icons/MicNone";
import PauseOutlinedIcon from "@material-ui/icons/PauseOutlined";
import { useHistory, useLocation } from "react-router-dom";
import DialogSubmit from "./DialogSubmit";
enum SpeakingPart {
  SPEAKING_PART_1 = "SpeakingPart1",
  SPEAKING_PART_2 = "SpeakingPart2",
}

const SpeakingTest: FC = () => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const [part, setPart] = useState<SpeakingPart>(SpeakingPart.SPEAKING_PART_1);

  const SpeakingTestPart1 = () => (
    <>
      <Grid item md={12} className={classes.speakingContainer}>
        <Box className={classes.speakingQuestion}>
          <Box style={{ textAlign: "center", marginTop: 22 }}>
            <Typography className={classes.titleSpeaking}>
              Question 2
            </Typography>
            <Typography style={{ fontWeight: 600 }}>
              What is your name?
            </Typography>
          </Box>

          <MicNoneIcon className={classes.iconMic} fontSize="large" />
          <Typography
            style={{
              fontSize: 20,
              color: "#c86478",
              fontWeight: 700,
              marginTop: 18,
            }}
          >
            04 : 22
          </Typography>
          <Button
            style={{
              backgroundColor: "#c86478",
              color: "#fff",
              textTransform: "capitalize",
              marginTop: 18,
            }}
            endIcon={<PauseOutlinedIcon />}
            variant="contained"
          >
            Pause
          </Button>
        </Box>
      </Grid>

      <Grid
        style={{ height: 42, padding: "0 20px", backgroundColor: "#fff" }}
        item
        md={12}
      >
        <Box className={classes.btnNextPrevious}>
          <Button
            onClick={() =>
              history.push(
                location.pathname.replace("speaking-test", "writing-test")
              )
            }
            className={classes.btnNext}
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Previous
          </Button>

          <Button
            onClick={() => setPart(SpeakingPart.SPEAKING_PART_2)}
            className={classes.btnNext}
            variant="contained"
            startIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Box>
      </Grid>
    </>
  );

  const SpeakingTestPart2 = () => (
    <>
      <Grid
        item
        md={12}
        style={{
          height: "calc(100vh - 200px)",
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: "#999", fontWeight: 700, marginTop: 22 }}>
          You should spend about 30 minutes on this test
        </Typography>
        <Typography style={{ color: "#999", fontWeight: 700 }}>
          You will meeting and answer an interview with Supervisor
        </Typography>

        <Typography style={{ fontWeight: 700, marginTop: 22 }}>
          This test will Begin at Satuday, 27 November 2021, 11:00 AM
        </Typography>
        <Typography style={{ fontWeight: 700 }}>Superviosr: Mr Tho</Typography>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#0e32ae",
            textTransform: "capitalize",
            color: "#fff",
          }}
        >
          Link to meeting
        </Button>
      </Grid>
    </>
  );
  return (
    <>
      <Grid container>
        <Grid container className={classes.container}>
          <Grid item md={12} className={classes.header}>
            <div className={classes.avatar}>
              <p>Hi! Julia</p>
              <Avatar />
            </div>
          </Grid>
        </Grid>

        <Grid item md={12} style={{ backgroundColor: "#fff", borderRadius: 6 }}>
          <Box className={classes.title}>
            <Typography>GT Writing Test - Informal Letters</Typography>
          </Box>

          <Typography
            style={{
              fontSize: 15,
              fontWeight: 600,
              paddingTop: 4,
              marginLeft: 20,
            }}
          >
            Speaking Part
          </Typography>
        </Grid>

        {part === SpeakingPart.SPEAKING_PART_1 && <SpeakingTestPart1 />}
        {part === SpeakingPart.SPEAKING_PART_2 && <SpeakingTestPart2 />}

        <Grid item md={12} className={classes.bottom}>
          <BottomBar />
        </Grid>
        <DialogSubmit />
      </Grid>
    </>
  );
};

export default SpeakingTest;
