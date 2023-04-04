import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
    header: {
      display: "flex",
      marginBottom: 10,
      justifyContent: "space-between",
      alignItems: "flex-start",
      "& >div:first-child": {
        width: "100%",
      },
    },
    avatar: {
      marginLeft: 10,
      width: 150,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      "& > p": {
        marginRight: 5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    title: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: 5,
      paddingTop: "4px",
      paddingBottom: "4px",
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
    leftTest: {
      backgroundColor: "#fff",
      borderRadius: 5,
      width: "100%",
    },
    content: {
      height: "calc(100vh - 255px)",
      overflow: "auto",
      backgroundColor: "#fff",
      borderBottom: "1px solid #999",

      "&::-webkit-scrollbar": {
        width: "12px !important",
        height: "12px !important",
      },
      "&::-webkit-scrollbar-track": {
        background: "transparent",
        border: "none",
        "&:vertical": {
          borderTop: "none",
          borderBottom: "none",
        },
        "&:horizontal": {
          borderLeft: "none",
          borderRight: "none",
        },
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#BDBDBD",
        backgroundClip: "padding-box",
        borderRadius: "5px",
        cursor: "pointer",
        "&:vertical": {
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
        },
        "&:horizontal": {
          borderTop: "3px solid transparent",
          borderBottom: "3px solid transparent",
        },
      },
      "&::-webkit-scrollbar-corner": {
        background: "transparent",
      },
    },
    boxBtnNext: {
      display: "flex",
      justifyContent: "space-between",
      margin: "12px 0",
    },
    btnNext: {
      color: "#fff",
      backgroundColor: "#0e32ae",
      minWidth: 140,
    },
    bottom: {
      height: "48px",
      backgroundColor: "#0e32ae",
      display: "flex",
      borderRadius: 5,
    },
    speakingContainer: {
      height: "calc(100vh - 240px)",
      backgroundColor: "#fff",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    speakingQuestion: {
      width: "60%",
      height: "80%",
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: 5,
      justifySelf: "center",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    titleSpeaking: {
      textTransform: "uppercase",
      fontSize: 20,
      color: "#c86478",
      fontWeight: 700,
    },
    iconMic: {
      marginTop: 36,
      border: "1px solid #fff",
      padding: 22,
      borderRadius: "50%",
      backgroundColor: "#fff",
    },
    btnNextPrevious: {
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    btn: {
      boxShadow: "none",
      marginLeft: 80,
      maxHeight: 26,
    },
    image: {
      width: "80%",
      height: "220px",
      alignSelf: "center",
      padding: "8px 0",
    },
    dialog: {
      display: "flex",
      padding: 20,

      "& .MuiTable-root": {
        border: "1px solid #000 ",
      },

      "& .MuiTableHead-root": {
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            border: "1px solid #000",
            padding: 0,
            textAlign: "center",
            width: 100,
          },
        },
      },

      "& .MuiTableBody-root": {
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            padding: 2,
            textAlign: "center",
            width: 100,

            "& .MuiFab-root": {
              width: 20,
              minHeight: 20,
              boxShadow: "none",
              height: 18,
              fontSize: 12,
              margin: "0 2px",
              lineHeight: 0,
              backgroundColor: "#34b4c7",
            },
          },
        },
      },
    },
  })
);
