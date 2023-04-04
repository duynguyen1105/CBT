import { Box, Typography } from "@material-ui/core";
import TestCard from "modules/Classes/components/TestCard";
import { FC } from "react";
import useStyle from "./styles";
import { IData, fakeDataTestCard } from "modules/Classes/models";

const ContentDetail: FC = () => {
  const classes = useStyle();

  return (
    <Box className={classes.container}>
      <Typography style={{ fontWeight: 600, fontSize: "18px", marginLeft: 20 }}>
        Upcomming
      </Typography>

      <Box style={{ display: "flex" }}>
        {fakeDataTestCard.map(
          (item: IData, index: any) =>
            !item.score && <TestCard dataTestCard={item} key={index} />
        )}
      </Box>

      <Typography style={{ fontWeight: 600, fontSize: "18px", marginLeft: 20 }}>
        Previous
      </Typography>

      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {fakeDataTestCard.map(
          (item: IData, index: any) =>
            item.score && <TestCard dataTestCard={item} key={index} />
        )}
      </Box>
    </Box>
  );
};

export default ContentDetail;
