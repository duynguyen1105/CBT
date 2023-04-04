import { AccordionDetails, Box } from "@material-ui/core";
import DateTimePickerCustom from "components/DateTimePickerCustom";
import Inputs from "components/Inputs";
import InputsRichtext from "components/InputsRichtext";
import { FC } from "react";
import useStyle from "./styles";

const Setting: FC = () => {
  const classes = useStyle();
  return (
    <Box style={{ paddingTop: 12 }}>
      <AccordionDetails className={classes.generalContent}>
        <Inputs
          name="title"
          title="Title"
          placeholder="Enter Test title here..."
        />
        <InputsRichtext
          className="description"
          onChange={() => {}}
          name="description"
          title="Description"
          value=""
        />
      </AccordionDetails>

      <AccordionDetails className={classes.timeContent}>
        <div className={classes.generalContent}>
          <p>Time</p>
          <div style={{ display: "flex", gap: 20 }}>
            <DateTimePickerCustom name="startTime" label="Begin:" />
            <DateTimePickerCustom name="endTime" label="End:" />
          </div>
        </div>
      </AccordionDetails>
    </Box>
  );
};

export default Setting;
