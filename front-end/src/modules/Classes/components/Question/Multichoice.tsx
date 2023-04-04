import {
  Box,
  Button,
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";
import { FC, useState } from "react";
import useStyle from "./styles";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";

const Multichoice: FC = () => {
  const classes = useStyle();
  const [state, setState] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { a, b, c, d, e, f, g, h } = state;
  return (
    <>
      <Box style={{ display: "flex", alignItems: "center", marginTop: 12 }}>
        <Typography style={{ fontWeight: 700 }}>Question 9-11</Typography>
        <Button
          className={classes.btn}
          variant="contained"
          startIcon={<NoteOutlinedIcon />}
        >
          Show Notepad
        </Button>
      </Box>

      <Box>
        <Typography style={{ fontSize: 14, fontStyle: "italic" }}>
          Complete the notes below
        </Typography>
        <Typography>
          Which <span style={{ color: "red" }}>THREE</span> things does the
          speaker mention in relation to the postgraduate's financial situation?
        </Typography>
      </Box>
      <FormControl component="fieldset">
        <FormGroup>
          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>A</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={a} onChange={handleChange} name="a" />
              }
              label="getting in touch with the student union"
            />
          </Box>

          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>B</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={b} onChange={handleChange} name="b" />
              }
              label="participating in outside community activies"
            />
          </Box>
          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>C</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={c} onChange={handleChange} name="c" />
              }
              label="joining associations of their peers"
            />
          </Box>
          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>D</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={d} onChange={handleChange} name="d" />
              }
              label="discussing any problems with a medical professional"
            />
          </Box>
          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>E</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={e} onChange={handleChange} name="e" />
              }
              label="course deadlines are stricter"
            />
          </Box>
          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>F</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={f} onChange={handleChange} name="f" />
              }
              label="the majorrity of the students are younger"
            />
          </Box>
          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>G</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={g} onChange={handleChange} name="g" />
              }
              label="of the moderate work load"
            />
          </Box>
          <Box className={classes.answerWrap}>
            <Fab className={classes.answer}>H</Fab>
            <FormControlLabel
              control={
                <Checkbox checked={h} onChange={handleChange} name="h" />
              }
              label="of higher living expenses"
            />
          </Box>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default Multichoice;
