import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as cbtPencil } from "asset/img/cbt-ic-pencil-black.svg";
import { ReactComponent as cbtTrash } from "asset/img/cbt-ic-trash-red.svg";
import useStyle from "./styles";
import { FC } from "react";

export interface ContentItemProps {
  title: string;
  color: string;
  category: string;
  onEdit: () => void;
}

const ContentItem: FC<ContentItemProps> = (props) => {
  const { title, category, color, onEdit } = props;
  const classes = useStyle();
  return (
    <Box className={classes.contentItem}>
      <Box className={classes.icon}></Box>
      <Box className={classes.contentData}>
        <Box style={{ backgroundColor: color }} className={classes.tag}>
          <SvgIcon
            component={cbtPencil}
            style={{ fontSize: "12px" }}
            viewBox="0 0 30 30"
          />
          <Typography
            style={{
              fontSize: "12px",
              lineHeight: 0,
              textTransform: "uppercase",
            }}
          >
            {category}
          </Typography>
        </Box>
        <Typography
          style={{
            fontSize: "14px",
            fontWeight: 600,
            flex: 8,
          }}
        >
          {title}
        </Typography>
        <Box className={classes.contentAction}>
          <SvgIcon
            onClick={onEdit}
            component={cbtPencil}
            style={{ fontSize: "12px", marginRight: 4 }}
            viewBox="0 0 30 30"
          />
          <SvgIcon
            component={cbtTrash}
            style={{ fontSize: "14px", color: "red", marginRight: 4 }}
            viewBox="0 0 24 24"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentItem;
