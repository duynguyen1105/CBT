import { Box, Button, Typography } from "@material-ui/core";
import { FC } from "react";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import WavesOutlinedIcon from "@material-ui/icons/WavesOutlined";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { SET_OPEN_CLOSE_DIALOG } from "store/reducers/classes/actionType";

const BottomBar: FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleOpenDialogSubmit = () => {
    dispatch({ type: SET_OPEN_CLOSE_DIALOG, payload: true });
  };
  return (
    <>
      <Box className={classes.question}>
        <AppsIcon />
        <Typography>Questions Palettes</Typography>
      </Box>

      <Box className={classes.time}>
        <AccessAlarmsIcon />
        <Typography style={{ fontSize: 20, fontWeight: 700, lineHeight: 0 }}>
          119: 59
        </Typography>
      </Box>

      <Box className={classes.groupBtn}>
        <Button className={classes.btn} endIcon={<VisibilityOutlinedIcon />}>
          Review
        </Button>

        <Button
          onClick={handleOpenDialogSubmit}
          className={classes.btn}
          endIcon={<SendOutlinedIcon />}
        >
          Submit
        </Button>

        <Button className={classes.btn} endIcon={<WavesOutlinedIcon />}>
          Solutions
        </Button>

        <ExpandLessIcon
          style={{ color: "#fff", fontSize: 32, marginRight: 18 }}
        />
      </Box>
    </>
  );
};

export default BottomBar;
