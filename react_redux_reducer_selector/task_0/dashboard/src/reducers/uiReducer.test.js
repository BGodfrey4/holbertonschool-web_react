import { uiReducer, initialState } from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('Tests the uiReducer', () => {
  it('verify the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const res = uiReducer();
    expect(res).toStrictEqual(initialState);
  });

  it('checks state returned by uiReducer function = the state when action SELECT_COURSE is successful', () => {
    const res = uiReducer(undefined, {type: "SELECT_COURSE"});
    expect(res).toStrictEqual(initialState);
  });

  it('The code examines the state provided by the `uiReducer` function, specifically targeting the `isNotificationDrawerVisible` function, to verify if the action was executed successfully.', () => {
    const res = uiReducer(undefined, {type: actions.DISPLAY_NOTIFICATION_DRAWER});
    expect(res).toStrictEqual({ ...initialState, isNotificationDrawerVisible: true });
  });
});
