import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";

const mockStore = configureStore(middleWares);
const middleWares = [thunk];

describe("testing UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "james@gmail.com";
    const password = "heheheh";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "james@gmail.com", password: "heheheh" },
    });
  });

  it("produces proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("produces proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("produces proper action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
