import React, { memo } from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import clsx from "clsx";

interface ButtonsOutlineProps {
  children?: string;
  onClick?: (e?: any) => void;
  type?: any;
  icon?: any;
  placementIcon?: any;
  disabled?: boolean;
  className?: any
}

const ButtonsOutline = memo((props: ButtonsOutlineProps) => {
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
});
export default ButtonsOutline;
