import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from "@testing-library/react";
import course, { initialCourseState } from "../store/features/course/slice";

const reducer = combineReducers({
  course
});

const originalState = {
  course: initialCourseState,
};

export function renderWithStore(ui, { state = originalState, dispatch = null}) {
  const middleware = applyMiddleware;

  const storeMock = createStore(reducer, state, middleware);

  return render(
    <Provider store={storeMock} >
      { ui }
    </Provider>
  )
}