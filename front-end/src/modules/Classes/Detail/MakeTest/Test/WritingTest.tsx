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
import BottomBar from "modules/Classes/components/BottomBar";
import { fakeWriting } from "modules/Classes/models";
import { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useStyle from "./styles";
import DialogSubmit from "./DialogSubmit";

const WritingTest: FC = () => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();

  const handleChangePage = () => {
    history.push(location.pathname.replace("writing-test", "speaking-test"));
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
      </Grid>

      <Grid item md={12} style={{ borderRadius: 5 }}>
        <Box className={classes.title}>
          <Typography style={{ fontSize: 20, fontWeight: 600, paddingTop: 8 }}>
            GT Writing Test - Informal Letters
          </Typography>
        </Box>
      </Grid>

      <Grid item md={12} style={{ borderRadius: 5, backgroundColor: "#fff" }}>
        <Typography
          style={{
            fontSize: 15,
            fontWeight: 600,
            paddingTop: 4,
            marginLeft: 20,
          }}
        >
          Writing Part
        </Typography>
      </Grid>

      <Grid item md={6} className={classes.content}>
        <Box
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            padding: 8,
          }}
        >
          <Typography
            style={{ fontSize: 20, fontWeight: 700, color: "#faaa5a" }}
          >
            {fakeWriting.title}
          </Typography>
          <Typography style={{ fontSize: 13, fontStyle: "italic" }}>
            You should spend 20 minutes on this task.
          </Typography>
          <Typography style={{ fontSize: 13, fontStyle: "italic" }}>
            The diagram gives infomation about the progress of making carbonated
            drinks.
          </Typography>
          <Typography style={{ fontSize: 13, fontStyle: "italic" }}>
            Summaries the infomation by slecting and reporting the mains
            features and make compairisons where relevant.
          </Typography>
          <Typography style={{ fontSize: 13, fontStyle: "italic" }}>
            You should write at least 150 words
          </Typography>
          <Box style={{ padding: 20, border: "1px solid #999" }}>
            <img style={{ width: "100%" }} src={fakeWriting.image} alt="" />
          </Box>
        </Box>
      </Grid>
      <Grid item md={6} className={classes.content}>
        <Box
          style={{
            backgroundColor: "#feeede",
            padding: 12,
            height: "calc(100% - 80px)",
          }}
        >
          <Typography style={{ fontWeight: 700 }}>
            Type your essay below and click Submit for evaluation
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            You have 20 minutes to completed. Writing task 1. The timer when you
            starting typing
          </Typography>

          <TextField
            rows={12}
            style={{ width: "100%", margin: "20px 0", backgroundColor: "#fff" }}
            variant="outlined"
            multiline
          />

          <Typography style={{ fontSize: 14 }}>Words count: 0</Typography>
        </Box>
      </Grid>

      <Grid style={{ height: 40, padding: "0 20px" }} item md={12}>
        <Box className={classes.btnNextPrevious}>
          <Button
            className={classes.btnNext}
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Previous
          </Button>

          <Button
            onClick={handleChangePage}
            className={classes.btnNext}
            variant="contained"
            startIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Box>
      </Grid>

      <Grid item md={12} className={classes.bottom}>
        <BottomBar />
      </Grid>
      <DialogSubmit />
    </Grid>
  );
};

export default WritingTest;
