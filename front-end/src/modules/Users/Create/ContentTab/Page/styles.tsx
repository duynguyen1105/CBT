import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      //background: '#FAFAFA',
      padding: '0px 20px 20px 20px'
    },
    title: {
      fontWeight: 700,
      fontSize: 18,
      marginRight: 50
    },
    addNewBtn: {
      borderColor: '#304D95',
      '& .MuiButton-label': {
        color: '#304D95'
      },
      '&:hover': {
        background: '#304D9510'
      },
    }
  }))