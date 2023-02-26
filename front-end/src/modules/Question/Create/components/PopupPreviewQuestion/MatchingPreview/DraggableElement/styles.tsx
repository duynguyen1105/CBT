import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    dropElement: {
      // border: "1px solid #478dfd",
      background: '#FAFAFA',
      minHeight: 200,
      minWidth: 160,
      width: "fit-content",
      margin: 5,
      padding: 10,
      display: 'inline-flex'
    },
    blank: {
      border: "1px solid #478dfd",
      background: '#fff',
      minHeight: 25,
      minWidth: 50,
      width: "fit-content",
      margin: 5,
      display: 'inline-flex'
    }
  }))