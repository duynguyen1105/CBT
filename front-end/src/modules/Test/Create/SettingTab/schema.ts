import * as yup from "yup";

const OptionSchema = yup.object().shape({
  value: yup.string().required(),
  label: yup.string().required(),
});

const TestOptionSchema = yup.object().shape({
  value: yup.boolean().required(),
  label: yup.string().notRequired(),
});

export const SettingTabFormValuesSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  startAt: yup.string().required("Start date is required"),
  finishAt: yup.string().required("Finish date is required"),
  timeLimit: yup.number().required().typeError("Time limit must be a number"),
  maxScore: yup.number().typeError("Max score must be a number"),
  scoreMethod: OptionSchema.required("Score method is required"),
  minScoreRequire: yup.number().typeError("Minimum score must be a number"),
  submissionLimit: yup.number().typeError("Submission limit must be a number"),
  whenDoingTestOptions: yup.array().of(TestOptionSchema.required()),
  afterSubmitTestOptions: yup.array().of(TestOptionSchema.required()),
  afterTestClosedOptions: yup.array().of(TestOptionSchema.required()),
  password: yup.string().notRequired(),
});

export type SettingTabFormValues = yup.InferType<typeof SettingTabFormValuesSchema>;

export type Option = yup.InferType<typeof OptionSchema>;

