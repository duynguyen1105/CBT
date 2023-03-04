import { Droppable } from 'react-beautiful-dnd';
import AnswerItem from '../AnswerItem';
import useStyles from './styles';

// interface DraggableElementProps {
//   prefix: any;
//   elements: any;
//   className?: string;
// }

const DraggableElement = (props) => {
  const { prefix, elements } = props;
  const classes = useStyles();
  return (
    <div className={prefix === "answer" ? classes.dropElement : classes.blank}>
      <Droppable
        droppableId={`${prefix}`}
      >
        {(provided) => (
          <div style={{minHeight: 25, minWidth: 50}} {...provided.draggableProps } ref={provided.innerRef}>
            {elements &&
              elements.map((item, index) => (
                <AnswerItem key={`${item.content + index}`} content={item.content} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      </div>
  );
};

export default DraggableElement;
