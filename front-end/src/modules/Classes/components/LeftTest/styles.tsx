import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      backgroundColor: "#0e32ae",
      height: 60,
      width: "100%",
      borderRadius: 5,
      color: "#fff",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    question: {
      height: 60,
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      color: "#999",
    },
    numberQuestion: {
      width: 20,
      minHeight: 20,
      boxShadow: "none",
      height: 18,
      fontSize: 12,
      margin: "0 2px",
      lineHeight: 0,
      backgroundColor: "#34b4c7",
    },
    preview: {
      height: 60,
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      color: "#999",
    },
    btn: {
      backgroundColor: "#0e32ae",
      boxShadow: "none",
      textTransform: "capitalize",
      lineHeight: 0,
      minWidth: 120,
      marginBottom: 10,
      marginLeft: 10,
    },
  })
);
