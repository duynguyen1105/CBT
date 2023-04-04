import { Button } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import useStyles from "./styles";

interface ButtonsProps {
  children?: string;
  onClick?: (e?: any) => void;
  type?: any;
  icon?: any;
  placementIcon?: boolean;
  disabled?: boolean;
  className?: any;
}

const Buttons = (props: ButtonsProps) => {
  const classes = useStyles();
  const { className, placementIcon, icon, children, onClick, ...rest } = props;
  return (
    <Button
      className={clsx(classes.root, className)}
      type="button"
      {...rest}
      onClick={onClick}
      endIcon={placementIcon ? <img src={icon} alt="" /> : ""}
      startIcon={placementIcon ? "" : <img src={icon} alt="" />}
    >
      {children}
    </Button>
  );
};
export default Buttons;
