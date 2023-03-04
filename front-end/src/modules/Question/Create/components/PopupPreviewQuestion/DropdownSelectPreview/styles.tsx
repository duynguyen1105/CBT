import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    selectAnswer: {
      margin: "0 10px",
      "& > .MuiSelect-outlined.MuiSelect-outlined": {
        padding: "10px 32px 10px 10px",
      },
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: "#333333",
    },
    feedback: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& .MuiAlert-root": {
        padding: "0px 10px",
      },
      "& .MuiAlert-icon": {
        padding: "20px 0px",
      },
    },
  })
);
