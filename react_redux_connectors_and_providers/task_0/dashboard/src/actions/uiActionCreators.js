import * as types from './uiActionTypes';
import { bindActionCreators } from 'redux';

export function Login(email, password) {
  return {
    type: types.LOGIN,
    user: {
      email,
      password,
    },
  };
}

export function Logout() {
  return {
    type: types.LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: types.DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: types.HIDE_NOTIFICATION_DRAWER,
  };
}

export function LoginSuccess() {
  return {
    type: types.LOGIN_SUCCESS,
  };
}

export function LoginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}

// // Async action creator that returns function that dispatches actions
export function loginRequest(email, password) {
  return async function(dispatch) {
    dispatch(Login(email, password));
    const response = await fetch('./login-success.json');
    const json = await response.json();
    if (json.status === 'ok') {
      dispatch(LoginSuccess());
    }
    else {
      dispatch(LoginFailure());
    }
  };
}

export const uiActions = {
  login: Login,
  logout: Logout,
  displayNotificationDrawer: displayNotificationDrawer,
  hideNotificationDrawer: hideNotificationDrawer,
  loginRequest: loginRequest,
  LoginFailure: LoginFailure,
  LoginSuccess: LoginSuccess,
}

export const boundUiActions = dispatch => bindActionCreators(uiActions, dispatch);
