import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      height: "32px",
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 12,
    },
    btnPlay: {
      backgroundColor: "#5bc3d2",
      height: "100%",
      width: "100%",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      cursor: "pointer",
    },
    boxBar: {
      backgroundColor: "#d6f0f4",
      height: "100%",
      width: "100%",
      flex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0 12px",
    },
    slider: {
      width: "100%",
      margin: "0 12px",
      color: "#5bc3d2",
    },
    boxVolumn: {
      backgroundColor: "#d6f0f4",
      borderLeft: "2px solid #999",
      height: "100%",
      width: "100%",
      flex: 2,
      color: "#999",
      display: "flex",
      alignItems: "center",
    },
    sliderVolumn: {
      width: "100%",
      margin: "0 12px",
      color: "#999",
    },
  })
);
