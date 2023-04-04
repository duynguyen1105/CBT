import { Box } from "@material-ui/core";
import Buttons from "components/Buttons";
import images from "config/images";
import ContentItem from "modules/Classes/components/ContentItem";
import { FC } from "react";
import useStyle from "./styles";

const Content: FC = () => {
  const classes = useStyle();
  const onChangePageEdit = () => {};
  return (
    <Box style={{ paddingTop: 20, height: "40vh" }}>
      <Box className={classes.btnWrap}>
        <Buttons
          className={classes.btnAdd}
          children="Add"
          icon={images.CBTicPlusCircle}
          onClick={() => {}}
          placementIcon
        />
      </Box>
      <Box className={classes.contentList}>
        <ContentItem
          category="Toeic"
          title="GT Writing Test - Informal Letters"
          color="green"
          onEdit={onChangePageEdit}
        />
        <ContentItem
          category="Ielts"
          title="GT Listening - Test"
          color="red"
          onEdit={onChangePageEdit}
        />
      </Box>
    </Box>
  );
};

export default Content;
