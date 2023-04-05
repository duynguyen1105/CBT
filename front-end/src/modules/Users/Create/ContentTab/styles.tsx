import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      margin: '20px 0',
      background: '#FAFAFA',
      width: '100%',
      flexWrap: 'nowrap'
    },
    content: {
      background: '#FFFFFF',
    },
    map: {
      marginLeft: 20,
      background: '#FFFFFF'
    }
  }))