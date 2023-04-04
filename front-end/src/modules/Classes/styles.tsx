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
    actionRowRight: {
      display: "flex",
      alignItems: "center",
      "& > div": {
        color: "#E1000A",
        background: "#F9ECEF",
        borderRadius: 5,
        height: 35,
        margin: 0,
        display: "flex",
        alignItems: "center",
        minWidth: 200,
        paddingLeft: 20,
      },
      "& > button": {
        marginLeft: 10,
      },
    },
    actionRowLeft: {
      display: "flex",
      alignItems: "center",
    },
    tableContainer: {
      background: "#FFFFFF",
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
    tableHead: {
      "& > tr": {
        borderBottom: "1px solid #BDBDBD",
        "& > th": {
          color: "#333333",
          fontSize: 14,
          fontWeight: "bold",
          padding: 0,
          lineHeight: 4,
        },
      },
    },
    tableBody: {
      "& .MuiTableCell-root": {
        overflowWrap: "anywhere",
      },
      "& tr:nth-child(even)": {
        backgroundColor: "#EFEFEF",
      },
      "& > tr": {
        borderBottomStyle: "hidden",
        cursor: "pointer",
        height: 57,
        "& > td": {
          paddingRight: "10px !important",
        },
        "& > td:first-child": {
          borderCollapse: "collapse",
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          paddingRight: "0px !important",
        },
        "& > td:nth-child(2)": {
          width: 230,
        },
        "& > td:last-child": {
          borderCollapse: "collapse",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          paddingRight: "0px !important",
        },
        "& .MuiTableCell-root": {
          padding: 0,
        },
      },
    },
    headerCheckbox: {
      "& .MuiSvgIcon-root": {
        color: "#304D95",
      },
    },
    popupconfirm: {
      "& .MuiDialogTitle-root": {
        padding: 0,
      },
      "& .MuiDialogContent-root": {
        padding: "8px 0 0 0",
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
      "& .MuiButton-label": {
        color: "#000000",
      },
      "& .MuiButton-outlinedSecondary": {
        border: "1px solid #304D95",
      },
    },
  })
);
