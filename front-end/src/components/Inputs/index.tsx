import { FormControl, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import { Visibility } from "@material-ui/icons/";
import clsx from "clsx";
import Images from "config/images";
import React, { useState } from "react";
import useStyles from "./styles";

interface InputsProps {
  title?: string;
  isEdit?: boolean;
  placeholder?: string;
  name: string;
  type?: string;
  defaultValue?: string;
  value?: string;
  showEyes?: boolean;
  showIcon?: boolean;
  img?: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: any;
  inputRef?: any;
  onChange?: any;
  autoComplete?: string;
  errorMessage?: string | null;
  multiline?: boolean;
  endIcon?: string;
  fullwidth?: boolean;
  onEndIconClick?: () => void;
}
const Inputs = React.forwardRef((props: InputsProps, ref) => {
  const classes = useStyles();
  const [toggleEyes, setToggleEyes] = useState(false);
  const {
    title,
    placeholder,
    isEdit,
    name,
    defaultValue,
    value,
    type,
    disabled,
    readOnly,
    className,
    showEyes,
    showIcon,
    img,
    inputRef,
    errorMessage,
    autoComplete,
    multiline,
    endIcon,
    fullwidth = true,
    onEndIconClick,
    ...rest
  } = props;

  const handleClick = () => {
    setToggleEyes(!toggleEyes);
  };

  const { ref: refInput, ...inputProps } = inputRef || { ref: ref };

  return (
    <FormControl fullWidth={fullwidth} classes={{ root: classes.container }}>
      {title && (
        <Typography className={classes.textTitle} classes={{ root: classes.textTitle }}>
          {title}
        </Typography>
      )}
      <TextField
        type={!toggleEyes ? type : "text"}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        value={value}
        multiline={multiline}
        fullWidth
        classes={{
          root: clsx(classes.rootTextField, {
            [classes.inputDisable]: readOnly,
            [classes.inputInvalid]: errorMessage,
          }),
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: clsx(classes.inputTextfield),
          },
          readOnly: readOnly,
          autoComplete,
          startAdornment: showIcon && (
            <InputAdornment position="start">
              <img src={img} alt="" />
            </InputAdornment>
          ),
          endAdornment: showEyes ? (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClick}>
                {!toggleEyes ? <img src={Images.icEyeClose} alt="eye-close" /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : isEdit ? (
            <InputAdornment position="end">
              <img src={Images.icPencilLine} alt="eye-close" />
            </InputAdornment>
          ) : (
            endIcon && (
              <InputAdornment position="end">
                <IconButton onClick={onEndIconClick}>
                  <img src={endIcon} alt="" />
                </IconButton>
              </InputAdornment>
            )
          ),
        }}
        {...inputProps}
        inputRef={refInput}
        {...rest}
      />
      {errorMessage && <Typography classes={{ root: classes.textError }}>{errorMessage}</Typography>}
    </FormControl>
  );
});
export default Inputs;

