import { MARK_AS_READ,
  SET_TYPE_FILTER, 
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';


export const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        filter: state.filter,
        notifications: action.data.map((notification) => {
          return { ...notification, isRead: false };
        }),
      };
    case MARK_AS_READ:
      return {
        filter: state.filter,
        notifications: state.notifications.map((notification) => {
          if (notification.id === action.index) {
            return { ...notification, isRead: true };
          }
          return notification;
        }),
      };
    case SET_TYPE_FILTER:
      return {
        filter: action.filter,
        notifications: state.notifications.map((notification) => {
          return { ...notification, isRead: false };
        }),
      };
    default:
      return state;
  }
};
