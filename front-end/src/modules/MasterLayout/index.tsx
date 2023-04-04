// import { lazy } from 'react';

import MenuLeft from "components/MenuLeft";
import { Redirect, Switch } from "react-router-dom";
import { routes } from "routers/routes";
import PermissionRoute from "./PermissionRoute";
import useStyles from "./styles";

import CreateQuestion from "modules/Question/Create";
import QuestionList from "modules/Question/List";

import Classes from "modules/Classes";
import CreateClass from "modules/Classes/Create";
import DetailClasses from "modules/Classes/Detail";
import BeginTest from "modules/Classes/Detail/MakeTest/BeginTest";
import CreateTest from "modules/Test/Create";
import TestList from "modules/Test/List";
import ListeningTest from "modules/Classes/Detail/MakeTest/Test/ListeningTest";
import ReadingTest from "modules/Classes/Detail/MakeTest/Test/ReadingTest";
import WritingTest from "modules/Classes/Detail/MakeTest/Test/WritingTest";
import SpeakingTest from "modules/Classes/Detail/MakeTest/Test/SpeakingTest";

function MasterLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuLeft />
      <div className={classes.layout}>
        <main className={classes.content}>
          <Switch>
            <Redirect
              exact
              from={routes.default}
              to={routes.question.default}
            />
            <PermissionRoute
              exact
              isPermission={true}
              component={QuestionList}
              urlRedirect={routes.login}
              path={routes.question.default}
            />
            <PermissionRoute
              exact
              isPermission={true}
              component={CreateQuestion}
              urlRedirect={routes.login}
              path={routes.question.create}
            />
            <PermissionRoute
              exact
              isPermission={true}
              component={CreateQuestion}
              urlRedirect={routes.login}
              path={routes.question.edit}
            />

            <PermissionRoute
              exact
              isPermission={true}
              component={TestList}
              urlRedirect={routes.login}
              path={routes.test.default}
            />
            <PermissionRoute
              exact
              isPermission={true}
              component={CreateTest}
              urlRedirect={routes.login}
              path={routes.test.create}
            />
            <PermissionRoute
              exact
              isPermission={true}
              component={Classes}
              urlRedirect={routes.login}
              path={routes.class.default}
            />
            <PermissionRoute
              exact
              isPermission={true}
              component={CreateClass}
              urlRedirect={routes.login}
              path={routes.class.create}
            />

            <PermissionRoute
              exact
              isPermission={true}
              component={DetailClasses}
              urlRedirect={routes.login}
              path={routes.class.edit}
            />

            <PermissionRoute
              exact
              isPermission={true}
              component={BeginTest}
              urlRedirect={routes.login}
              path={routes.class.makeTest}
            />

            <PermissionRoute
              exact
              isPermission={true}
              component={ListeningTest}
              urlRedirect={routes.login}
              path={routes.class.startTest}
            />
            <PermissionRoute
              exact
              isPermission={true}
              component={ReadingTest}
              urlRedirect={routes.login}
              path={routes.class.testReading}
            />

            <PermissionRoute
              exact
              isPermission={true}
              component={WritingTest}
              urlRedirect={routes.login}
              path={routes.class.testWriting}
            />

            <PermissionRoute
              exact
              isPermission={true}
              component={SpeakingTest}
              urlRedirect={routes.login}
              path={routes.class.testSpeaking}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
}
export default MasterLayout;
