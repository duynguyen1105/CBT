import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      height: "60vh",
      paddingTop: 12,
    },
    title: {
      marginLeft: 30,
    },
    tableContainer: {
      width: "100%",
    },
    tableWrap: {
      position: "relative",
      padding: "0 30px",
    },
    tableBorder: {
      borderRight: "1px solid #000",
    },
    table: {
      marginBottom: 20,
      "& .MuiTableHead-root": {
        "& .MuiTableRow-root": {
          border: "1px solid #000",
          "& .MuiTableCell-root": {
            padding: 2,
            borderBottom: "1px solid #000",
            color: "#000",
            textAlign: "center",
          },
        },
      },

      "& .MuiTableBody-root": {
        "& .MuiTableRow-root": {
          border: "1px solid #000",

          "& .MuiTableCell-root": {
            padding: 2,
            borderBottom: "1px solid #000",
            textAlign: "center",
          },
        },
      },
    },
    btnAdd: {
      height: "20px",
      width: "32px",
      fontSize: "12px !important",
      position: "absolute",
      bottom: -8,
      right: 30,
      "& .MuiButton-label": {
        "& .MuiButton-endIcon": {
          width: "16px",
          height: "16px",
        },
      },
    },
    btnDelete: {
      height: "20px !important",
      width: "20px !important",
      backgroundSize: "18px",
      margin: 0,
    },
  })
);
