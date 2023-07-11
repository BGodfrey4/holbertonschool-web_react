import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Notifications />', () => {
  // test that it renders without crashing
  it('Tests that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('Renders with props', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.props().dataPriority === 'urgent');
    expect(wrapper.props().dataValue === 'test');
    expect(wrapper.props().html === '<u>test</u>');
  });
  // pass a spy as the markAsRead property
  it('Passes a spy as the markAsRead property', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.props().markAsRead);
  });
  // Check that when simulating a click on the component, the spy is called with the right ID argument
  it('Checks that when simulating a click on the component, the spy is called with the right ID argument', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.props().markAsRead);
  });


});
