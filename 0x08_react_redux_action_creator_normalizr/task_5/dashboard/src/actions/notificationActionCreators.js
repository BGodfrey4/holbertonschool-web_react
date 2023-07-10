import * as types from './notificationActionTypes';

function markAsRead(index) {
  return {
    type: types.MARK_AS_READ,
    index,
  };
}

function setNotificationFilter(filter) {
  return {
    type: types.SET_TYPE_FILTER,
    filter,
  };
}

export { markAsRead, setNotificationFilter };
