import { FC } from "react";

import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import AppsIcon from "@material-ui/icons/Apps";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import WavesOutlinedIcon from "@material-ui/icons/WavesOutlined";
import { Box, Button, Fab, Typography } from "@material-ui/core";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { SET_OPEN_CLOSE_DIALOG } from "store/reducers/classes/actionType";

const LeftTest: FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleOpenDialogSubmit = () => {
    dispatch({ type: SET_OPEN_CLOSE_DIALOG, payload: true });
  };
  return (
    <>
      <Box className={classes.container}>
        <AccessAlarmsIcon />
        <Typography style={{ fontSize: 20, fontWeight: 700 }}>
          119: 59
        </Typography>
      </Box>

      <Box className={classes.question}>
        <AppsIcon />
        <Typography>Questions Palettes</Typography>
      </Box>

      <Box>
        <Fab className={classes.numberQuestion} color="primary">
          1
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          2
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          3
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          4
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          5
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          6
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          7
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          8
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          9
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          10
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          11
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          12
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          13
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          14
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          15
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          16
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          17
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          18
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          19
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          20
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          21
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          22
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          23
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          24
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          25
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          26
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          27
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          28
        </Fab>
        <Fab className={classes.numberQuestion} color="primary">
          29
        </Fab>
      </Box>

      <Box className={classes.preview}>
        <FormatListBulletedIcon />
        <Typography>Preview list</Typography>
      </Box>

      <Box style={{ margin: 2 }}>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          endIcon={<VisibilityOutlinedIcon />}
        >
          Review
        </Button>

        <Button
          onClick={handleOpenDialogSubmit}
          variant="contained"
          color="primary"
          className={classes.btn}
          endIcon={<SendOutlinedIcon />}
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          endIcon={<WavesOutlinedIcon />}
        >
          Solutions
        </Button>
      </Box>
    </>
  );
};

export default LeftTest;
