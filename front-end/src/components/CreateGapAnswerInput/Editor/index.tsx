import { Answer } from "modules/Question/Create/models";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { createAnswer, formats, redoChange, removeAnswer, undoChange } from "./EditorToolbar";
import "./styles.css";
interface EditorProps {
  placeholder?: string;
  onChangeQuestion: any;
  question: any;
  className: string;
  onChangeAnswer: Function;
  answer: Answer[];
}

export const Editor = (props: EditorProps) => {
  const { onChangeQuestion, question, placeholder, className, answer, onChangeAnswer } = props;

  const handleChange = (value) => {
    onChangeQuestion(value);
    const ans = [...value.matchAll("<ans>(.*?)</ans>")].map((e) => e[1]) as string[];
    const newAnswer = ans.map((e, index) => {
      if (answer[index]) return { ...answer[index], content: e, isCorrect: true };
      else
        return {
          displayOrder: index,
          content: e,
          score: "0",
          penaltyScore: "0",
          isCorrect: true,
          feedback: "",
        };
    });
    onChangeAnswer(newAnswer);
  };

  const modules = {
    toolbar: {
      container: `.${className}`,
      handlers: {
        undo: undoChange,
        redo: redoChange,
        createAnswer: createAnswer,
        removeAnswer: removeAnswer,
      },
    },
  };
  return (
    <div className="text-editor">
      <EditorToolbar className={className} />
      <ReactQuill theme="snow" value={question} onChange={handleChange} placeholder={placeholder} modules={modules} formats={formats} preserveWhitespace />
    </div>
  );
};

export default Editor;
