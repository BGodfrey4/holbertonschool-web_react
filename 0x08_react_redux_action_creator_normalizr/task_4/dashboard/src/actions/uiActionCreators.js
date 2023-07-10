import * as types from './uiActionTypes';

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
