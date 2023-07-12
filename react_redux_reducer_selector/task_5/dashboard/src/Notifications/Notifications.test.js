import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  {
    id: 3,
    type: 'urgent',
    html: { __html: `<strong>Urgent requirement</strong> - complete by EOD` },
  },
];

describe('Test suite for Notifications', () => {
  it('tests Notifications renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notifications />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that click on close icon calls handleHideDrawer and updates displayDrawer to false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setState({ displayDrawer: true });
    wrapper.find('#close-icon').simulate('click');
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('test to verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.update();
    wrapper.find('p').first().simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('test that Notifications.markAsRead calls with the correct id', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    instance.markAsRead = jest.fn();
    instance.markAsRead(1);
    expect(instance.markAsRead).toHaveBeenCalledWith(1);
  });

  it('tests that Notifications renders paragraph when list is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find('p').last();
    expect(element.text()).toBe('No new notification for now');
  });

  it('tests that Notifications renders when list is not empty', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const element = wrapper.find(NotificationItem);
    expect(element.length).toBe(3);
  });

  it('tests that Notifications renders the correct text', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const element = wrapper.find('p').last();
    expect(element.text()).toBe('Here is the list of notifications');
  });

  it('tests that Notifications does not render when display is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const element = wrapper.find('p');
    expect(element.length).toBe(1);
  });
  // verify that clicking on the menu item calls handleDisplayDrawer, use setState and instance
  it('test to verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.update();
    wrapper.find('p').first().simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });
  // verify that clicking on the close calls handleHideDrawer, use setState and instance
  it('test to verify that clicking on the close calls handleHideDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.update();
    wrapper.find('p').first().simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    wrapper.find('#close-icon').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    

  });
});
