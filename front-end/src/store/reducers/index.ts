import { classesReducers, IClassesState } from "./classes/index";
import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import { globalState, globalReducer } from "./global";
import createPersistReducer from "store/reducers/persist";
import { authenticationReducer, AuthenticationType } from "./authentication";
import { IProfileState, profileReducer } from "./profile";
import { IQuestionState, questionReducers } from "./question";

const createRootReducer = (history: History) => {
  const reducers = combineReducers({
    authentication: authenticationReducer,
    router: connectRouter(history),
    profile: profileReducer,
    global: globalReducer,
    question: questionReducers,
    classes: classesReducers,
  });
  return createPersistReducer(reducers);
};

export interface reducerType {
  authentication: AuthenticationType;
  profile: IProfileState;
  global: globalState;
  router: {
    location: {
      pathname: string;
      search: string;
      hash: string;
    };
    action: string;
  };
  question: IQuestionState;
  classes: IClassesState;
}

export default createRootReducer;
