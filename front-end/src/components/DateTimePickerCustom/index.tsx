import { KeyboardDateTimePicker, KeyboardDateTimePickerProps, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ForwardRefRenderFunction, forwardRef, useImperativeHandle, useRef } from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import Images from "config/images";

interface DateTimePickerCustomProps extends KeyboardDateTimePickerProps {
  name: string;
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  onBlur: () => void;
  errorMessage?: string;
}

export type DateTimePickerCustomRef = {
  focus: () => void;
};

const DateTimePickerCustom: ForwardRefRenderFunction<DateTimePickerCustomRef, DateTimePickerCustomProps> = ({ onChange, onBlur, value = null, errorMessage, name, label, ...restProps }, ref) => {
  const datePickerRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const KeyBoardIcon = (props) => <img src={Images.CBTicCalendar} alt="" {...props} />;
  useImperativeHandle(ref, () => ({
    focus: () => {
      datePickerRef.current?.focus();
    },
  }));

  return (
    <Grid className={classes.container}>
      <Typography>{label}</Typography>
      <Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDateTimePicker
            variant="inline"
            ampm={true}
            value={value}
            format="dd/MM/yyyy HH:mm:ss"
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            inputRef={datePickerRef}
            className={classes.datePicker}
            KeyboardButtonProps={{ "aria-label": "change date" }}
            keyboardIcon={<KeyBoardIcon />}
            InputProps={{
              readOnly: false,
              disableUnderline: true,
              classes: {
                input: classes.inputDatePicker,
              },
            }}
            {...restProps}
          />
        </MuiPickersUtilsProvider>
        {errorMessage && <Typography classes={{ root: classes.textError }}>{errorMessage}</Typography>}
      </Grid>
    </Grid>
  );
};

export default forwardRef(DateTimePickerCustom);

// const DateTimePickerCustom = React.forwardRef((props: DatePickerProps, ref) => {
//   const { label } = props;
//   const [date, setDate] = useState<Date | null>(null);
//   const classes = useStyles();

//   const KeyBoardIcon = (props) => <img src={Images.CBTicCalendar} alt="" {...props} />;

//   return (
//     <Grid className={classes.container}>
//       <Typography>{label}</Typography>
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <KeyboardDateTimePicker
//           minDateMessage=""
//           disablePast
//           //disableToolbar
//           format="yyyy/MM/dd HH:mm"
//           value={date}
//           className={classes.datePicker}
//           onChange={(date) => {
//             setDate(date);
//           }}
//           KeyboardButtonProps={{ "aria-label": "change date" }}
//           keyboardIcon={<KeyBoardIcon />}
//           InputProps={{
//             readOnly: true,
//             disableUnderline: true,
//             classes: {
//               input: classes.inputDatePicker,
//             },
//           }}
//         />
//       </MuiPickersUtilsProvider>
//     </Grid>
//   );
// });

// export default DateTimePickerCustom;

