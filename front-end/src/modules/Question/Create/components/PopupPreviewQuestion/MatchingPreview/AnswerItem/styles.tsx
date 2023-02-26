import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    answerItem: {
      borderRadius: 5,
      margin: 5,
      padding: 5,
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      display: "inline-flex",
      overflowWrap: "anywhere"
    }
  }))