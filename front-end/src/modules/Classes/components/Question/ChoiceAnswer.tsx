import { Box, Button, Fab, TextField, Typography } from "@material-ui/core";
import { FC } from "react";
import useStyle from "./styles";

const ChoiceAnswer: FC = () => {
  const classes = useStyle();
  return (
    <Box style={{ padding: 12 }}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontWeight: 700 }}>Question 15-19</Typography>
      </Box>

      <Typography style={{ fontSize: 12 }}>
        Choose the correct answer and move it into gap
      </Typography>

      <Box style={{ display: "flex" }}>
        <Box style={{ flex: 2 }}>
          <p
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            necessitatibus magni doloribus
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Ganpat
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Jadhav's monthly ration of
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            kerosene was insuffient Ganpat
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Jadhav's monthly
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Jadhav's monthly
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Jadhav's monthly
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Jadhav's monthly
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Jadhav's monthly
            <Box className={classes.selectWrap}>
              <Fab className={classes.numberQuestion}>1</Fab>
              <TextField
                className={classes.inputChoiceAnswer}
                variant="outlined"
              />
            </Box>
            Jadhav's monthly
          </p>
        </Box>
        <Box style={{ flex: 1 }}>
          <Typography
            style={{
              textAlign: "center",
              marginTop: "-22px",
              fontWeight: 700,
            }}
          >
            Answer
          </Typography>

          <Box>
            <Button
              style={{
                textTransform: "none",
                height: 22,
                fontSize: 12,
                marginBottom: 8,
              }}
              variant="contained"
            >
              Visited by touries
            </Button>
            <Button
              style={{
                textTransform: "none",
                height: 22,
                fontSize: 12,
                marginBottom: 8,
              }}
              variant="contained"
            >
              often used as toys
            </Button>
            <Button
              style={{
                textTransform: "none",
                height: 22,
                fontSize: 12,
                marginBottom: 8,
              }}
              variant="contained"
            >
              the odlest tree ever
            </Button>
            <Button
              style={{
                textTransform: "none",
                height: 22,
                fontSize: 12,
                marginBottom: 8,
              }}
              variant="contained"
            >
              affluent coutries
            </Button>
            <Button
              style={{
                textTransform: "none",
                height: 22,
                fontSize: 12,
                marginBottom: 8,
              }}
              variant="contained"
            >
              no suject to much sunshine
            </Button>
            <Button
              style={{
                textTransform: "none",
                height: 22,
                fontSize: 12,
                marginBottom: 8,
              }}
              variant="contained"
            >
              complicated
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChoiceAnswer;
