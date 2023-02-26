import { SvgIcon } from "@material-ui/core";
import { ReactComponent as CBTicRecord } from "asset/img/cbt-ic-record.svg";
import { ReactComponent as CBTicCheck } from "asset/img/cbt-ic-check.svg";
import { ReactComponent as CBTicShuffle } from "asset/img/cbt-ic-shuffle.svg";
import { ReactComponent as CBTicTable } from "asset/img/cbt-ic-table.svg";
import { ReactComponent as CBTicRows } from "asset/img/cbt-ic-rows.svg";
import { ReactComponent as CBTicPencil } from "asset/img/cbt-ic-pencil.svg";
import { TypeQuestionValue } from "models/question";

export const navs = [
  {
    title: "Select One",
    icon: <SvgIcon component={CBTicRecord} viewBox="0 0 32 32" />,
    value: TypeQuestionValue.SelectOne,
  },
  {
    title: "Select Many",
    icon: <SvgIcon component={CBTicCheck} viewBox="0 0 32 32" />,
    value: TypeQuestionValue.SelectMany,
  },
  {
    title: "Matching",
    icon: <SvgIcon component={CBTicShuffle} viewBox="0 0 32 32" />,
    value: TypeQuestionValue.Matching,
  },
  {
    title: "Dropdown - Select",
    icon: <SvgIcon component={CBTicTable} viewBox="0 0 32 32" />,
    value: TypeQuestionValue.DropdownSelect,
  },
  {
    title: "Fill in the gaps",
    icon: <SvgIcon component={CBTicRows} viewBox="0 0 32 32" />,
    value: TypeQuestionValue.FillInTheGaps,
  },
  {
    title: "Essay",
    icon: <SvgIcon component={CBTicPencil} viewBox="0 0 32 32" />,
    value: TypeQuestionValue.Essay,
  },
];
