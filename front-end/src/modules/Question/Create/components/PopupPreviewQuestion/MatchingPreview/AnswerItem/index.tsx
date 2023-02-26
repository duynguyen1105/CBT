import { Draggable } from "react-beautiful-dnd";
import useStyles from "./styles";

interface AnswerItemProps {
  content: any,
  index: any
}

const AnswerItem = (props: AnswerItemProps) => {
  const { content, index } = props
  const classes = useStyles()

  return (
    <div>
      <Draggable draggableId={`${content + index}`} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              className={classes.answerItem}
              ref={provided.innerRef}
              snapshot={snapshot}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {content}
            </div>
          );
        }}
      </Draggable>
    </div>
  )
};

export default AnswerItem