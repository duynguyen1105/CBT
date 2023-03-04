import { Grid } from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import JsxParser from "react-jsx-parser";
import { Question } from "../../../models";
import DraggableElement from "./DraggableElement";
import useStyles from "./styles";

interface MatchingPreviewProps {
  question: Question;
  showFeedback: boolean
}

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const MatchingPreview = (props: MatchingPreviewProps) => {
  const { question, showFeedback } = props;
  const classes = useStyles();
  const [questionContent, setQuestionContent] = useState("");

  const [elements, setElements] = useState({});

  useEffect(() => {
    const lists = question.answer.map((e) => `pos_${e.displayOrder.toString()}`);
    lists.push("answer");
    const newElement = lists.reduce(
      (acc, listKey) => ({
        ...acc,
        [listKey]:
          listKey === "answer"
            ? question.answer.map((e, index) => ({
                id: `item_${index}`,
                content: `${e.content}`,
              }))
            : [],
      }),
      {}
    );

    setElements(newElement);
    let n = 0;
    const newContent = question.questionContent.replaceAll(/<ans>(.*?)<\/ans>/g, (v) => {
      n++;
      return `<DraggableElement
        elements={elements["pos_${n - 1}"]}
        prefix={"pos_${n - 1}"}
      />`;
    });
    setQuestionContent(newContent);
  }, [question]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    // console.log(result.destination);

    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index);

    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(destinationList, result.destination.index, removedElement);
    setElements(listCopy);
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container className={classes.answers}>
          <Grid item sm={9}>
            <JsxParser
              bindings={{
                elements: elements,
              }}
              components={{ DraggableElement }}
              jsx={questionContent}
            />
          </Grid>
          <Grid item sm={3}>
            <DraggableElement elements={elements["answer"]} prefix={"answer"} />
          </Grid>
        </Grid>
      </DragDropContext>
      {showFeedback &&
        question.answer.map((answer) => (
          <div className={classes.feedback}>
            <span>{answer.content}</span>
            <div dangerouslySetInnerHTML={{ __html: answer.feedback }}></div>
          </div>
        ))}
    </Fragment>
  );
};

export default MatchingPreview;
