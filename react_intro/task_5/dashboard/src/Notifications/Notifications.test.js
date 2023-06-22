import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('notification', () => {
  it('Will render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Notifications will render three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('Notifications will render the text & Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Here is all the list of notifications');
  });
});
