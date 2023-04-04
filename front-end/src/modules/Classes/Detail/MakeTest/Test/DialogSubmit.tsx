import {
  Box,
  Button,
  Dialog,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "store/reducers";
import { SET_OPEN_CLOSE_DIALOG } from "store/reducers/classes/actionType";
import useStyle from "./styles";

const DialogSubmit: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const handleClose = () => {
    dispatch({ type: SET_OPEN_CLOSE_DIALOG, payload: false });
  };
  const open = useSelector(
    (state: reducerType) => state.classes.isOpenDialogSubmit
  );
  return (
    <Dialog onClose={handleClose} open={open}>
      <Typography
        style={{ fontWeight: 700, fontSize: 22, margin: "12px 0 0 20px" }}
      >
        Preview and Submit
      </Typography>

      <Box className={classes.dialog}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Fab>1</Fab>
              </TableCell>
              <TableCell style={{ color: "green" }}>Answered</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Fab>1</Fab>
              </TableCell>
              <TableCell style={{ color: "red" }}>Not Answer</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Fab>1</Fab>
              </TableCell>
              <TableCell style={{ color: "red" }}>Not Answer</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Fab>1</Fab>
              </TableCell>
              <TableCell style={{ color: "green" }}>Answered</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: 8,
        }}
      >
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            color: "#0e32ae",
            border: "1px solid #0e32ae",
            textTransform: "capitalize",
            lineHeight: 0,
          }}
          onClick={handleClose}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
        >
          Back to test
        </Button>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            lineHeight: 0,
            color: "#fff",
            backgroundColor: "#0e32ae",
            textTransform: "capitalize",
          }}
          endIcon={<SendOutlinedIcon />}
          variant="contained"
        >
          Accept and Submit
        </Button>
      </Box>
    </Dialog>
  );
};

export default DialogSubmit;
