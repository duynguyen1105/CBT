import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      "& > div:first-child": {
        paddingRight: 20,
        marginTop: 0,
      },
      "& > div:nth-child(2)": {
        marginTop: 0,
      },
      "& > div": {
        marginTop: 20,
      },
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
    typeChoice: {
      background: "#FFFFFF",
      padding: 15,
      width: "100%",
      "& > p": {
        fontWeight: 600,
        fontSize: 16,
        margin: 0,
      },
    },
    groupBtn: {
      marginTop: 20,
      display: "flex",
      justifyContent: "flex-end",
      "& > button": {
        marginLeft: 10,
      },
    },
    content: {
      background: "#FFFFFF",
      padding: 20,
      marginTop: 20,
    },
    tableContainer: {
      background: "#FFFFFF",
      marginBottom: 10,
    },
    label: {
      fontSize: 14,
      fontWeight: 700,
      color: "#333333",
      marginBottom: 9,
      lineHeight: "17px",
      marginTop: 0,
    },
    tableHead: {
      "& > tr": {
        border: "1px solid #BDBDBD",
        "& > th": {
          border: "1px solid #BDBDBD",
          color: "#333333",
          fontSize: 14,
          fontWeight: 600,
          padding: 0,
          lineHeight: 2.5,
        },
      },
    },
    tableBody: {
      "& .MuiTableCell-root": {
        overflowWrap: "anywhere",
      },
      "& > tr": {
        height: 40,
        "& > td": {
          border: "1px solid #BDBDBD",
        },
        "& .MuiTableCell-root": {
          padding: "0 10px",
        },
      },
    },
    moreBtn: {
      borderColor: "#13BB37",
      "& .MuiButton-label": {
        color: "#13BB37",
      },
      "&:hover": {
        background: "#13BB3710",
      },
    },
    answerContent: {
      background: "#FAFAFA",

      "& > p": {
        backgroundColor: "#d1def5",
        color: "#478dfd",
        border: "1px solid green",
        padding: 2,
        margin: 5,
        borderRadius: 5,
        width: "fit-content",
      },
    },
    answerScore: {
      width: "150px",
      "& .MuiInputBase-input": {
        textAlign: "center",
      },
      background: "#FAFAFA",
    },
    popupconfirm: {
      "& .MuiDialogTitle-root": {
        padding: 0,
      },
      "& .MuiDialogContent-root": {
        padding: "24px 0",
      },
      "& .MuiTypography-h6": {
        fontSize: "24px !important",
        lineHeight: 1.2,
      },
      "& .MuiDialogContentText-root": {
        fontSize: "16px !important",
        fontWeight: "normal !important",
        lineHeight: 1.2,
      },
      ".MuiGrid-root > .MuiButtonBase-root > .MuiButton-label": {
        color: "#fff",
      },
      "& .MuiButton-outlinedSecondary": {
        border: "1px solid #304D95",
      },
    },
  })
);
