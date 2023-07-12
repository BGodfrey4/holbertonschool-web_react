// import * as types from './uiActionCreators';
import * as types from './uiActionCreators';

describe('uiActionCreators', () => {
  it('confirm types.login returns correct object', () => {
    const email = 'fake@mail.com';
    const password = 'fakepassword';
    const expectedAction = {
      type: 'LOGIN',
      user: {
        email,
        password,
      },
    };
    expect(types.Login(email, password)).toEqual(expectedAction);
  });

  it('confirm types.logout returns correct object', () => {
    const expectedAction = {
      type: 'LOGOUT',
    };
    expect(types.Logout()).toEqual(expectedAction);
  });
  
  it('confirm types.displayNotificationDrawer returns correct object', () => {
    const expectedAction = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };
    expect(types.displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('confirm types.hideNotificationDrawer returns correct object', () => {
    const expectedAction = {
      type: 'HIDE_NOTIFICATION_DRAWER',
    };
    expect(types.hideNotificationDrawer()).toEqual(expectedAction);
  });
});
