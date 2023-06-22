import React from 'react';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notifications />', () => {
  // test that it renders without crashing
  it('Will test that Notifications will render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Will render with props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('Will render with props', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.props().dataPriority === 'urgent');
    expect(wrapper.props().dataValue === 'test');
    expect(wrapper.props().html === '<u>test</u>');
  });

});
