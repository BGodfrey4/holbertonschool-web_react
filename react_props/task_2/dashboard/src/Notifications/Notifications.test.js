import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('notification', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // renders NotificationItem component for each element in the list
  it('renders NotificationItem component for each element in the list', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Here will be the list of notifications');
  });

  // renders first element
  it('renders first element', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').first().html()).toBe(
      '<li data-priority="default">New course available</li>'
    );
  });
});
