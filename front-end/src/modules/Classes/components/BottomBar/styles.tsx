import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    question: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      gap: 12,
    },
    time: {
      backgroundColor: "#0e32ae",
      width: "100%",
      borderRadius: 5,
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
    },
    groupBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
    },
    btn: {
      boxShadow: "none",
      maxHeight: 26,
      textTransform: "capitalize",
      backgroundColor: "#fff",
      color: "#0e32ae",
    },
  })
);
