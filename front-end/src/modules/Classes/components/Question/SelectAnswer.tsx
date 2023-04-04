import {
  Box,
  Button,
  Fab,
  InputBase,
  NativeSelect,
  Typography,
  createStyles,
  withStyles,
} from "@material-ui/core";
import { FC, useState } from "react";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import useStyle from "./styles";

const BootstrapInput = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 4,
      minWidth: "70px",
      position: "relative",
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "4px 30px 4px 12px",
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const SelectAnswer: FC = () => {
  const classes = useStyle();
  const [age, setAge] = useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <Box style={{ padding: 12 }}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Typography style={{ fontWeight: 700 }}>Question 15-19</Typography>
        <Button
          className={classes.btn}
          variant="contained"
          startIcon={<NoteOutlinedIcon />}
        >
          Show Notepad
        </Button>
      </Box>
      <Typography style={{ fontSize: 11, marginBottom: 8 }}>
        Complete the following sentences using
        <span style={{ color: "red", textTransform: "uppercase" }}>
          No more than three words
        </span>
        from the text for each gap.
      </Typography>
      <Box>
        <p style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          necessitatibus magni doloribus
          <Box className={classes.selectWrap}>
            <Fab className={classes.numberQuestion}>1</Fab>
            <NativeSelect
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}></option>
              <option value={20}></option>
              <option value={30}></option>
            </NativeSelect>
          </Box>
          Ganpat
          <Box className={classes.selectWrap}>
            <Fab className={classes.numberQuestion}>1</Fab>
            <NativeSelect
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}></option>
              <option value={20}></option>
              <option value={30}></option>
            </NativeSelect>
          </Box>
          Jadhav's monthly ration of
          <Box className={classes.selectWrap}>
            <Fab className={classes.numberQuestion}>1</Fab>
            <NativeSelect
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}></option>
              <option value={20}></option>
              <option value={30}></option>
            </NativeSelect>
          </Box>
          kerosene was insuffient Ganpat
          <Box className={classes.selectWrap}>
            <Fab className={classes.numberQuestion}>1</Fab>
            <NativeSelect
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}></option>
              <option value={20}></option>
              <option value={30}></option>
            </NativeSelect>
          </Box>
          Jadhav's monthly ration of kerosene was insuffient
        </p>
      </Box>
    </Box>
  );
};

export default SelectAnswer;
