import {
  Box,
  Fab,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { FC, useState } from "react";
import useStyle from "./styles";

interface ABCDProps {
  data: any;
  order: number;
}

const ABCD: FC<ABCDProps> = (props) => {
  const classes = useStyle();
  const { data, order } = props;
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Fab className={classes.numberQuestion} color="primary">
          {order + 1}
        </Fab>
        <Typography style={{ lineHeight: 0, marginLeft: 8, fontWeight: 700 }}>
          {data.title}
        </Typography>
      </Box>
      <Box>
        <Box>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <Box className={classes.answerWrap}>
                <Fab className={classes.answer}>A</Fab>
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label={data.A}
                />
              </Box>

              <Box className={classes.answerWrap}>
                <Fab className={classes.answer}>B</Fab>
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label={data.B}
                />
              </Box>
              <Box className={classes.answerWrap}>
                <Fab className={classes.answer}>C</Fab>
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label={data.C}
                />
              </Box>
              <Box className={classes.answerWrap}>
                <Fab className={classes.answer}>D</Fab>
                <FormControlLabel
                  value="d"
                  control={<Radio />}
                  label={data.D}
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default ABCD;
