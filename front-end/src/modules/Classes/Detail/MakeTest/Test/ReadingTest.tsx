import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import BottomBar from "modules/Classes/components/BottomBar";
import { FC, useState } from "react";
import useStyle from "./styles";
import TrueFalse from "modules/Classes/components/Question/TrueFalse";
import SelectAnswer from "modules/Classes/components/Question/SelectAnswer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ChoiceAnswer from "modules/Classes/components/Question/ChoiceAnswer";
import { useHistory, useLocation } from "react-router-dom";
import { fakeReading } from "modules/Classes/models";
import DialogSubmit from "./DialogSubmit";
enum ReadingPart {
  PART_1 = "Part1",
  PART_2 = "Part2",
}

enum TypeActionButton {
  NEXT = "Next",
  PREVIOUS = "Previous",
}

const ReadingTest: FC = () => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const [part, setPart] = useState<ReadingPart>(ReadingPart.PART_1);

  const handleChangePart = (type: TypeActionButton) => {
    if (type === TypeActionButton.NEXT) {
      part === ReadingPart.PART_2
        ? history.push(
            location.pathname.replace("reading-test", "writing-test")
          )
        : setPart(ReadingPart.PART_2);
    }
    if (type === TypeActionButton.PREVIOUS) {
      part === ReadingPart.PART_1
        ? history.push(
            location.pathname.replace("reading-test", "listening-test")
          )
        : setPart(ReadingPart.PART_1);
    }
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
            backgroundColor: "#d7e6dc",
            padding: 12,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={{ fontWeight: 700, fontSize: 18 }}>
            {fakeReading.title}
          </Typography>
          <Typography style={{ fontSize: 13 }}>
            {fakeReading.summary}
          </Typography>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={fakeReading.image} className={classes.image} />
          <Typography style={{ fontSize: 13 }}>{fakeReading.desc}</Typography>
        </Box>
      </Grid>
      <Grid item md={6} className={classes.content}>
        {part === ReadingPart.PART_1 && (
          <>
            <TrueFalse />
            <SelectAnswer />
          </>
        )}

        {part === ReadingPart.PART_2 && <ChoiceAnswer />}
      </Grid>

      <Grid style={{ height: 40, padding: "0 20px" }} item md={12}>
        <Box className={classes.btnNextPrevious}>
          <Button
            onClick={() => handleChangePart(TypeActionButton.PREVIOUS)}
            className={classes.btnNext}
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Previous
          </Button>

          <Button
            onClick={() => handleChangePart(TypeActionButton.NEXT)}
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

export default ReadingTest;
