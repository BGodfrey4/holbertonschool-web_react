import {
  Login, loginRequest, Logout,
  displayNotificationDrawer, hideNotificationDrawer,
  LoginSuccess, LoginFailure
} from './uiActionCreators';

import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login action creator', () => {
  it('returns the correct action object', () => {
    const email = 'test@example.com';
    const password = 'password';
    const expectedAction = {
      type: 'LOGIN',
      user: {
        email: 'test@example.com',
        password: 'password',
      },
    };

    expect(Login(email, password)).toEqual(expectedAction);
  });
});

describe('loginRequest', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('dispatches LOGIN_SUCCESS when the json status is ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ status: 'ok' }),
    });
    await loginRequest()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN_SUCCESS',
    });
  });

  it('dispatches LOGIN_FAILURE when the json status is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ status: 'not ok' }),
    });
    await loginRequest()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN_FAILURE',
    });
  });
});

describe('Logout action creator', () => {
  it('returns the correct action object', () => {
    const expectedAction = {
      type: 'LOGOUT',
    };

    expect(Logout()).toEqual(expectedAction);
  });
});

describe('displayNotificationDrawer action creator', () => {
  it('returns the correct action object', () => {
    const expectedAction = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };

    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });
});


describe('hideNotificationDrawer action creator', () => {
  it('returns the correct action object', () => {
    const expectedAction = {
      type: 'HIDE_NOTIFICATION_DRAWER',
    };

    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('LoginSuccess action creator', () => {
  it('returns the correct action object', () => {
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
    };

    expect(LoginSuccess()).toEqual(expectedAction);
  });
});

describe('LoginFailure action creator', () => {
  it('returns the correct action object', () => {
    const expectedAction = {
      type: 'LOGIN_FAILURE',
    };

    expect(LoginFailure()).toEqual(expectedAction);
  });
});

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LoginSuccess when login is successful', async () => {
    fetchMock.getOnce('./login-success.json', { body: { status: 'ok' } });

    const store = mockStore();
    const email = 'test@example.com';
    const password = 'password';
    const expectedActions = [
      Login(email, password),
      LoginSuccess()
    ];

    await store.dispatch(loginRequest(email, password));
    expect(store.getActions()).toEqual(expectedActions);
  });

it('dispatches LoginFailure when login fails', async () => {
    fetchMock.getOnce('./login-success.json', { body: { status: 'error' } });

    const store = mockStore();
    const email = 'test@example.com';
    const password = 'password';
    const expectedActions = [
      Login(email, password),
      LoginFailure()
    ];

    await store.dispatch(loginRequest(email, password));
    expect(store.getActions()).toEqual(expectedActions);
  });

});
