import {
  Box,
  Button,
  Fab,
  InputBase,
  NativeSelect,
  Table,
  TableCell,
  TableRow,
  Typography,
  createStyles,
  withStyles,
} from "@material-ui/core";
import { FC, useState } from "react";
import useStyle from "./styles";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";

const BootstrapInput = withStyles(() =>
  createStyles({
    input: {
      marginTop: 4,
      marginLeft: 2,
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

const TrueFalse: FC = () => {
  const classes = useStyle();
  const [age, setAge] = useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <Box style={{ padding: 12 }}>
      <Box style={{ display: "flex", alignItems: "center", marginTop: 12 }}>
        <Typography style={{ fontWeight: 700 }}>Question 1-3</Typography>
        <Button
          className={classes.btn}
          variant="contained"
          startIcon={<NoteOutlinedIcon />}
        >
          Show Notepad
        </Button>
      </Box>
      <Box>
        <Box style={{ margin: "12px 0" }}>
          <Typography style={{ fontSize: 13, fontStyle: "italic" }}>
            Do the following statements agree with the infomation given in
            Reading Passage 3?
          </Typography>
          <Typography style={{ fontSize: 13 }}>
            In boxes 36 - 40 on your answer sheet, write
          </Typography>
        </Box>

        <Box>
          <Table style={{ width: "80%" }}>
            <TableRow className={classes.tableTrueFalse}>
              <TableCell
                style={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                true
              </TableCell>
              <TableCell style={{ color: "rgba(0,0,0,0.8)" }}>
                if the statement agrees with the information
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableTrueFalse}>
              <TableCell
                style={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                false
              </TableCell>
              <TableCell style={{ color: "rgba(0,0,0,0.8)" }}>
                if the statement contradicts the information
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableTrueFalse}>
              <TableCell
                style={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                given
              </TableCell>
              <TableCell style={{ color: "rgba(0,0,0,0.8)" }}>
                if there is no infomation on this
              </TableCell>
            </TableRow>
          </Table>
        </Box>

        <Box style={{ marginTop: 8 }}>
          <Box className={classes.answerWrap}>
            <Fab className={classes.numberQuestion}>1</Fab>
            <NativeSelect
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}>TRUE</option>
              <option value={20}>FALSE</option>
              <option value={30}>GIVEN</option>
            </NativeSelect>
            <Typography style={{ fontSize: 13, marginLeft: 4 }}>
              Ganpat Jadhav's monthly ration of kerosene was insuffient
            </Typography>
          </Box>

          <Box className={classes.answerWrap}>
            <Fab className={classes.numberQuestion}>2</Fab>
            <NativeSelect
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}>TRUE</option>
              <option value={20}>FALSE</option>
              <option value={30}>GIVEN</option>
            </NativeSelect>
            <Typography style={{ fontSize: 13, marginLeft: 4 }}>
              Ganpat Jadhav's monthly ration of kerosene was insuffient
            </Typography>
          </Box>

          <Box className={classes.answerWrap}>
            <Fab className={classes.numberQuestion}>3</Fab>
            <NativeSelect
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}>TRUE</option>
              <option value={20}>FALSE</option>
              <option value={30}>GIVEN</option>
            </NativeSelect>
            <Typography style={{ fontSize: 13, marginLeft: 4 }}>
              Ganpat Jadhav's monthly ration of kerosene was insuffient
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TrueFalse;
