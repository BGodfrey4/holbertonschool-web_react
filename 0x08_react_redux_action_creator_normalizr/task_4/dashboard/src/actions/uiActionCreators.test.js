import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";

describe("tests UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "james@gmail.com";
    const password = "heheheh";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "james@gmail.com", password: "heheheh" },
    });
  });

  it("creates proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("creates proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("creates proper action + hides notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
