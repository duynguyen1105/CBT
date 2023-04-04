import { Box, Slider, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import useStyle from "./styles";

const ListenerBar: FC = () => {
  const classes = useStyle();
  const [value, setValue] = useState<number>(30);
  const [volumn, setVolumn] = useState<number>(80);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleChangeVolumn = (event: any, newValue: number | number[]) => {
    setVolumn(newValue as number);
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.btnPlay}>
        <PlayArrowIcon />
      </Box>
      <Box className={classes.boxBar}>
        <Typography>00:00</Typography>
        <Slider
          className={classes.slider}
          value={value}
          onChange={handleChange}
        />
        <Typography>29:00</Typography>
      </Box>
      <Box className={classes.boxVolumn}>
        <VolumeUpIcon style={{ paddingLeft: 8 }} />
        <Slider
          className={classes.sliderVolumn}
          value={volumn}
          onChange={handleChangeVolumn}
        />
      </Box>
    </Box>
  );
};

export default ListenerBar;
