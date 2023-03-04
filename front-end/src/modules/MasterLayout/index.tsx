// import { lazy } from 'react';

import MenuLeft from 'components/MenuLeft';
import { Redirect, Switch } from 'react-router-dom';
import { routes } from 'routers/routes';
import PermissionRoute from './PermissionRoute';
import useStyles from './styles';

import QuestionList from 'modules/Question/List'
import CreateQuestion from 'modules/Question/Create';

import TestList from 'modules/Test/List';
import CreateTest from 'modules/Test/Create';

function MasterLayout() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuLeft />
      <div className={classes.layout}>
        <main className={classes.content}>
          <Switch>
            <Redirect exact from={routes.default} to={routes.question.default} />
            <PermissionRoute exact isPermission={true} component={QuestionList} urlRedirect={routes.login} path={routes.question.default} />
            <PermissionRoute exact isPermission={true} component={CreateQuestion} urlRedirect={routes.login} path={routes.question.create} />
            <PermissionRoute exact isPermission={true} component={CreateQuestion} urlRedirect={routes.login} path={routes.question.edit} />

            <PermissionRoute exact isPermission={true} component={TestList} urlRedirect={routes.login} path={routes.test.default} />
            <PermissionRoute exact isPermission={true} component={CreateTest} urlRedirect={routes.login} path={routes.test.create} />
          </Switch>
        </main>
      </div>
    </div>
  );

}
export default MasterLayout;
