import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: 14,
      fontWeight: 700,
      color: '#333333',
      marginBottom: 9,
      lineHeight: '17px'
    },
  }),
);

export const customSelectStyle = {
  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1,
    '&::-webkit-scrollbar': {
      width: 9,
      background: '#F8F8F8',
      borderRadius: 5,
      backgroundClip: 'padding-box',
      border: '2px solid transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C4C4C4',
      borderRadius: 4,
      backgroundClip: "padding-box",
      border: '2px solid transparent',
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#BDBDBD',
    fontWeight: 500,
    fontSize: 14,
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: 40,
    fontSize: 14,
    borderRadius: 0,
    background: '#FAFAFA',
    border: "1px solid #BDBDBD",
    '&:hover': {
      borderColor: "#333333",
    }
  }),
  multiValue: (provided, state) => ({
    ...provided,
    borderRadius: 5,
    height: 23,
    background: '#304D95',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: '#FFFFFF',
    fontSize: 14,
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    color: '#FFFFFF',
    '&:hover': {
      background: '#304D95',
      borderRadius: 5
    }
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    paddingRight: 10
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    paddingLeft: 10
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#333333',
    fontSize: 14,
    fontWeight: 500
  }),
}
