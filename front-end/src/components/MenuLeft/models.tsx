import { SvgIcon } from "@material-ui/core";
import { ReactComponent as CBTicFileText } from "asset/img/cbt-ic-filetext.svg";
import { ReactComponent as CBTicGrid4 } from "asset/img/cbt-ic-grid4.svg";
import { ReactComponent as CBTicHouse } from "asset/img/cbt-ic-house.svg";
import { ReactComponent as CBTicStack } from "asset/img/cbt-ic-stack.svg";
import { ReactComponent as CBTicUsers } from "asset/img/cbt-ic-users.svg";
import { routes } from "routers/routes";

export const navs = [
  // {
  //   title: "My Workspace",
  //   icon: <SvgIcon component={CBTicHouse} />,
  //   path: routes.workspace,
  // },
  // {
  //   title: "My Users",
  //   icon: <SvgIcon component={CBTicUsers} viewBox="0 0 24 25" />,
  //   path: routes.user,
  // },
  {
    title: "My Questions",
    icon: <SvgIcon component={CBTicFileText} viewBox="0 0 24 25" />,
    path: routes.question.default,
  },
  {
    title: "My Tests",
    icon: <SvgIcon component={CBTicStack} viewBox="0 0 24 25" />,
    path: routes.test.default,
  },
  {
    title: "My Classes",
    icon: <SvgIcon component={CBTicGrid4} viewBox="0 0 24 25" />,
    path: routes.class.default,
  },
];
