import { Box, Fab, Input, InputAdornment, Typography } from "@material-ui/core";
import { FC } from "react";
import useStyle from "./styles";

interface IIntoSpaceProps {
  data: any;
}

const IntoSpace: FC<IIntoSpaceProps> = (props) => {
  const classes = useStyle();
  const { data } = props;
  return (
    <Box style={{ marginBottom: 12 }}>
      <Typography style={{ textTransform: "uppercase", fontWeight: 700 }}>
        {data.title}
      </Typography>
      <Box style={{ width: "60%", border: "1px solid #000" }}>
        {data.paragraph.map((item, index) => (
          <Box key={index}>
            <Typography
              style={{ textTransform: "uppercase", padding: "8px 0 0 8px" }}
            >
              {item.title}
            </Typography>
            <ul style={{ margin: 0 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <li>necessitatibus magni doloribus</li>
                <Input
                  style={{ maxWidth: 120 }}
                  startAdornment={
                    <InputAdornment position="start">
                      <Fab className={classes.numberQuestion} color="primary">
                        1
                      </Fab>
                    </InputAdornment>
                  }
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <li>necessitatibus magni doloribus</li>
                <Input
                  style={{ maxWidth: 120 }}
                  startAdornment={
                    <InputAdornment position="start">
                      <Fab className={classes.numberQuestion} color="primary">
                        1
                      </Fab>
                    </InputAdornment>
                  }
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <li>necessitatibus magni doloribus</li>
                <Input
                  style={{ maxWidth: 120 }}
                  startAdornment={
                    <InputAdornment position="start">
                      <Fab className={classes.numberQuestion} color="primary">
                        1
                      </Fab>
                    </InputAdornment>
                  }
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <li>necessitatibus magni doloribus</li>
                <Input
                  style={{ maxWidth: 120 }}
                  startAdornment={
                    <InputAdornment position="start">
                      <Fab className={classes.numberQuestion} color="primary">
                        1
                      </Fab>
                    </InputAdornment>
                  }
                />
              </div>
            </ul>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IntoSpace;
