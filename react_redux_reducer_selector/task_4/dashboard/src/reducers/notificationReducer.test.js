import notificationReducer, { initialState } from './notificationReducer';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

const mockNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    type: 'urgent',
    value: 'New data available',
  },
];

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle MARK_AS_READ', () => {
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    const expectedState = {
      filter: initialState.filter,
      notifications: initialState.notifications.map((notification) => {
        if (notification.id === action.index) {
          return { ...notification, isRead: true };
        }
        return notification;
      }),
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const expectedState = {
      filter: action.filter,
      notifications: initialState.notifications.map((notification) => {
        return { ...notification, isRead: false };
      }),
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: mockNotifications,
    };
    const expectedState = {
      filter: initialState.filter,
      notifications: action.data.map((notification) => {
        return { ...notification, isRead: false };
      }),
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
