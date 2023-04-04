import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    testCardContainer: {
      width: "44%",
      height: "120px",
      margin: 20,
      display: "flex",
      border: "1px solid #999",
      borderRadius: 5,
    },
    testCardLeft: {
      flex: 1,
      borderRadius: "5px 0 0 5px",
    },
    testCardLeftHeader: {
      width: "100%",
      height: "26px",
      borderRadius: "5px 0 0 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    leftTitle: {
      fontSize: 13,
      textTransform: "uppercase",
      color: "#fff",
      lineHeight: 0,
      fontWeight: 600,
    },
    testCardRight: {
      flex: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      paddingLeft: 8,
    },
    boxInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: 8,
    },
    btnStart: {
      backgroundColor: "#0e32ae",
      width: 22,
      height: 18,
      fontSize: 10,
      color: "#fff",
      textTransform: "capitalize",
    },
    btnViewDetail: {
      width: 100,
      height: 18,
      fontSize: 10,
      color: "#0e32ae",
      textTransform: "capitalize",
    },
    boxScore: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
