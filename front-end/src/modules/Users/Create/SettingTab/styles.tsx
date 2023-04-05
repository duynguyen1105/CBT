import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      margin: '20px 0',
      background: '#FAFAFA',
      width: '100%'
    },
    heading: {
      fontSize: 16,
      flexBasis: '33.33%',
      flexShrink: 0,
      fontWeight: 700
    },
    generalContent: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 20,
      '& >div': {
        marginBottom: 20
      }
    },
    timeContent: {
      display: 'flex',
      flexDirection: 'column'
    },
    timeContainer: {
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'row',
      '& >p': {
        fontWeight: 700,
        fontSize: 15,
      },
      '& >div': {
        marginLeft: 20
      }
    },
    timeLimit: {
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& >p': {
        fontWeight: 700,
        fontSize: 15
      },
      '& >input': {
        background: '#FAFAFA',
        fontWeight: 700,
        fontSize: 14,
        border: '1px solid #BDBDBD',
        borderRadius: 5,
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 10,
        height: 36,
        width: '80px !important'
      },
    },
    scoreContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    scoreRow: {
      paddingLeft: 20,
      minWidth: 500,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& >p': {
        fontWeight: 700,
        fontSize: 15
      },
      '& >input': {
        fontWeight: 700,
        fontSize: 14,
        border: '1px solid #BDBDBD',
        borderRadius: 5,
        textAlign: 'center',
        height: 36,
        width: '80px !important',
        background: '#FAFAFA',
      },
    },
    questionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 36
    },
    formGroup: {
      '& >p': {
        color: '#333333',
        fontWeight: 700,
        fontSize: 15,
        margin: 0
      },
    },
    passWordRow: {
      paddingLeft: 20,
      minWidth: 300,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& >p': {
        fontWeight: 700,
        fontSize: 15
      },
      '& >input': {
        fontWeight: 700,
        fontSize: 14,
        border: '1px solid #BDBDBD',
        borderRadius: 5,
        textAlign: 'center',
        height: 36,
        minWidth: '100px !important',
        background: '#FAFAFA',
      },
    },
  }))

export const customSelectStyle = {
  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
    color: '#333333',
    fontSize: 14,
    fontWeight: 700,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#BDBDBD',
    fontWeight: 700,
    fontSize: 14,
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: 40,
    borderRadius: 5,
    background: '#FAFAFA',
    border: "1px solid #BDBDBD",
    '&:hover': {
      borderColor: "#BDBDBD",
    }
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    paddingLeft: 10,
    fontWeight: 700,
    fontSize: 14,
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#333333',
    fontSize: 14,
    fontWeight: 700
  }),
}