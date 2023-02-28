import { Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import ButtonAction from "components/ButtonAction";
import Buttons from "components/Buttons";
import ButtonsOutline from "components/ButtonsOutline";
import CustomSelect from "components/CustomSelect";
import CreateGapAnswerInput from "components/CreateGapAnswerInput";
import Inputs from "components/Inputs";
import PopupEditFeedback from "components/PopupEditFeedback";
import QuestionTypeSelect from "components/QuestionTypeSelect";
import Images from "config/images";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PopupPreviewQuestion from "./components/PopupPreviewQuestion";
import produce from "immer";
import { listQuestionCategory, TypeQuestionValue } from "models/question";
import { headerOption, Question } from "./models";
import useStyles from "./styles";
import InputsRichtext from "components/InputsRichtext";
import PopupConfirm from "components/PopupConfirm";

const CreateQuestion = () => {
  const methods = useForm({
    defaultValues: {
      questionTitle: "",
      category: "",
      questionContent: "",
      answers: [
        {
          displayOrder: 0,
          answerContent: "",
          score: 100,
          penaltyScore: 0,
          isCorrect: true,
          feedback: "",
        },
        {
          displayOrder: 1,
          answerContent: "",
          score: 100,
          penaltyScore: 0,
          isCorrect: false,
          feedback: "",
        },
      ],
    },
  });
  const classes = useStyles();
  const [preview, setPreview] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [changeType, setChangeType] = useState<TypeQuestionValue | undefined>();

  const [answerId, setAnswerId] = useState(0);

  const initialQuestion: Question = {
    questionTitle: "",
    category: "",
    questionContent: "",
    answers: [],
    questionType: TypeQuestionValue.SelectOne,
  };

  const [question, setQuestion] = useState<Question>(initialQuestion);
  const handleClosePreview = () => {
    setPreview(false);
  };
  const handleChangeQuestionContent = (field, data) => {
    setQuestion(
      produce((draft) => {
        draft[field] = data;
      })
    );
  };
  const handleEditAnswer = (index: number) => () => {
    setAnswerId(index);
    setOpenEdit(true);
  };

  const handleAddAnswer = () => {
    setQuestion(
      produce((draft) => {
        draft.answers = [
          ...draft.answers,
          {
            displayOrder: 0,
            answerContent: "",
            score: "0",
            penaltyScore: "0",
            isCorrect: false,
            feedback: "",
          },
        ];
      })
    );
  };
  const handleRemoveAnswer = (index: number) => () => {
    setQuestion(
      produce((draft) => {
        draft.answers.splice(index, 1);
      })
    );
  };
  const handleChangeAnswer = (data) => {
    setQuestion(
      produce((draft) => {
        draft.answers = data;
      })
    );
  };
  const handleChangeAnswerContent = (index: number, field: string, value: string | boolean) => {
    if (field === "isCorrect" && question.questionType === TypeQuestionValue.SelectOne) {
      setQuestion(
        produce((draft) => {
          draft.answers = question.answers.map((ans, idx) => (idx === index ? { ...ans, isCorrect: value } : { ...ans, isCorrect: false }));
        })
      );
    }

    setQuestion(
      produce((draft) => {
        draft.answers[index][field] = value;
      })
    );
  };
  const handleChangeFeedback = (data) => {
    setOpenEdit(false);
    setQuestion(
      produce((draft) => {
        draft.answers[answerId] = data;
      })
    );
  };

  const isSimpleType = (type: TypeQuestionValue) => [TypeQuestionValue.SelectOne, TypeQuestionValue.SelectMany].includes(type);
  const isComplexType = (type: TypeQuestionValue) => [TypeQuestionValue.Matching, TypeQuestionValue.FillInTheGaps, TypeQuestionValue.DropdownSelect].includes(type);

  const handleChangeQuestionType = (value) => {
    value !== question.questionType && setChangeType(value);
  };

  const handleClickSuccessChangeType = () => {
    if (changeType && ((isSimpleType(question.questionType) && isComplexType(changeType)) || (isComplexType(question.questionType) && isSimpleType(changeType)))) {
      handleChangeQuestionContent("questionType", changeType);
      handleChangeQuestionContent("questionContent", "");
      handleChangeQuestionContent("answers", []);
    } else if (changeType === TypeQuestionValue.Essay) {
      handleChangeQuestionContent("answers", [
        {
          displayOrder: 0,
          answerContent: "",
          score: "0",
          penaltyScore: "0",
          isCorrect: true,
          feedback: "",
          gradingGuide: "",
        },
      ]);
      handleChangeQuestionContent("questionType", changeType);
    } else {
      handleChangeQuestionContent("questionType", changeType);
    }
    setChangeType(undefined);
  };

  return (
    <Grid container className={classes.container}>
      <QuestionTypeSelect type={question.questionType} onChange={handleChangeQuestionType} />
      <FormProvider {...methods}>
        <form autoComplete="off">
          <Grid container className={classes.content}>
            <Grid container className={classes.container}>
              <Grid item md={9}>
                <Inputs
                  onChange={(e) => handleChangeQuestionContent("questionTitle", e.target.value)}
                  defaultValue={question.questionTitle}
                  name="questionTitle"
                  title="Question Title"
                  placeholder="Insert question title here..."
                  multiline
                />
              </Grid>
              <Grid item md={3}>
                <CustomSelect name="category" label="Category" options={listQuestionCategory} placeholder="Category" onChange={(e) => handleChangeQuestionContent("category", e)} />
              </Grid>
              <Grid item md={12}>
                {isComplexType(question.questionType) ? (
                  <CreateGapAnswerInput
                    className="question-content"
                    onChangeQuestion={(e) => handleChangeQuestionContent("questionContent", e)}
                    name="questionContent"
                    title="Question Content"
                    placeholder="Insert question content here..."
                    question={question.questionContent}
                    answer={question.answers}
                    onChangeAnswer={handleChangeAnswer}
                  />
                ) : (
                  <InputsRichtext
                    title="Question Content"
                    name="question-content"
                    className="question-content"
                    placeholder="Insert question content here..."
                    value={question.questionContent}
                    onChange={(e) => handleChangeQuestionContent("questionContent", e)}
                  />
                )}
              </Grid>
              <Grid container>
                {question.questionType !== TypeQuestionValue.Essay && (
                  <>
                    <p className={classes.label}>Answer</p>
                    <TableContainer className={classes.tableContainer}>
                      <Table>
                        <TableHead className={classes.tableHead}>
                          <TableRow>
                            {headerOption?.map((option, index) => (
                              <TableCell align="center" style={{ minWidth: option.width }} key={index}>
                                {option.name}
                              </TableCell>
                            ))}
                            <TableCell align="center" style={{ minWidth: 50 }}>
                              Feedback
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: 25 }}></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                          {question.answers?.map((row, index) => {
                            return (
                              <TableRow key={`answer-${index}`}>
                                <TableCell align="center">{index + 1}</TableCell>
                                <TableCell className={classes.answerContent}>
                                  {isSimpleType(question.questionType) ? (
                                    <InputsRichtext
                                      name={`answer-${index}`}
                                      className={`answer-content-${index}`}
                                      value={row.answerContent}
                                      onChange={(value) => handleChangeAnswerContent(index, "answerContent", value)}
                                    />
                                  ) : !row.isCorrect ? (
                                    <TextField
                                      fullWidth
                                      InputProps={{
                                        disableUnderline: true,
                                      }}
                                      value={row.answerContent}
                                      onChange={(event) => handleChangeAnswerContent(index, "answerContent", event.target.value)}
                                    />
                                  ) : (
                                    <p>{row.answerContent}</p>
                                  )}
                                </TableCell>
                                <TableCell align="center" className={classes.answerScore}>
                                  <TextField
                                    fullWidth
                                    InputProps={{
                                      disableUnderline: true,
                                    }}
                                    value={row.score}
                                    onChange={(event) => handleChangeAnswerContent(index, "score", event.target.value)}
                                  />
                                </TableCell>
                                <TableCell align="center" className={classes.answerScore}>
                                  <TextField
                                    fullWidth
                                    InputProps={{
                                      disableUnderline: true,
                                    }}
                                    value={row.penaltyScore}
                                    onChange={(event) => handleChangeAnswerContent(index, "penaltyScore", event.target.value)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <Checkbox
                                    checked={row.isCorrect}
                                    onChange={isSimpleType(question.questionType) ? (event) => handleChangeAnswerContent(index, "isCorrect", event.target.checked) : undefined}
                                    color="primary"
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <ButtonAction btnType="edit" onClick={handleEditAnswer(index)} />
                                </TableCell>
                                <TableCell align="center">
                                  {isSimpleType(question.questionType) ||
                                    (!isSimpleType(question.questionType) && !row.isCorrect && <ButtonAction btnType="delete" onClick={handleRemoveAnswer(index)} />)}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                )}
                {question.questionType === TypeQuestionValue.Essay && (
                  <Grid container spacing={2}>
                    <Grid item md={12}>
                      <InputsRichtext
                        className="answer-content"
                        onChange={(value) => handleChangeAnswerContent(0, "answerContent", value)}
                        name="answer"
                        title="Answer Content"
                        placeholder="Input answer content here..."
                        value={question.answers[0].answerContent}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Inputs name="score" title="Score" value={question.answers[0].score} onChange={(event) => handleChangeAnswerContent(0, "score", event.target.value)} />
                    </Grid>
                    <Grid item md={6}>
                      <Inputs
                        name="penaltyScore"
                        title="Penalty Score"
                        value={question.answers[0].penaltyScore}
                        onChange={(event) => handleChangeAnswerContent(0, "penaltyScore", event.target.value)}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <InputsRichtext
                        className="guide"
                        onChange={(value) => handleChangeAnswerContent(0, "gradingGuide", value)}
                        name="gradingGuide"
                        title="Grading Guide"
                        placeholder="Input grading guide here..."
                        value={question.answers[0].gradingGuide}
                      />
                    </Grid>
                  </Grid>
                )}
                {question.questionType !== TypeQuestionValue.FillInTheGaps && question.questionType !== TypeQuestionValue.Essay && (
                  <ButtonsOutline className={classes.moreBtn} children="More Option" icon={Images.CBTicPlusCircleGreen} placementIcon={true} onClick={handleAddAnswer} />
                )}
                {openEdit && <PopupEditFeedback answer={question.answers[answerId]} open={openEdit} onClickCancel={() => setOpenEdit(false)} onClickSuccess={handleChangeFeedback} />}
                <PopupPreviewQuestion open={preview} question={question} onClose={handleClosePreview} />
              </Grid>
            </Grid>
            <Grid item md={12} className={classes.groupBtn}>
              <Buttons children="Preview" icon={Images.CBTicEyeWhite} placementIcon={true} onClick={() => setPreview(true)} />
              <Buttons children="Save As Draft" icon={Images.CBTicFileArrowDown} placementIcon={true} />
              <Buttons children="Publish" icon={Images.CBTicPlusCircleWhite} placementIcon={true} />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <PopupConfirm
        className={classes.popupconfirm}
        title={`Are you sure to change question type?`}
        text={`Once changed, some contents will be deleted.`}
        open={!!changeType}
        onClickSuccess={handleClickSuccessChangeType}
        onClickCancel={() => setChangeType(undefined)}
      />
    </Grid>
  );
};

export default CreateQuestion;
