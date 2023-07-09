import React from 'react';
import Notifications from './Notifications';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
]

const listNotificationsShort = [
	{ id: 1, type: 'default', value: 'New course available' },
]

describe('Notifications', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it('Notifications renders w/o crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Notifications renders properly when displayDrawer=false', () => {
		const wrapper = shallow(<Notifications />);
		const menuItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'menuItem');
		const notificationsItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications');
		expect(menuItem.length).toBe(1);
		expect(notificationsItem.length).toBe(0);
	});

	it('Notifications renders properly when displayDrawer=true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true}/>);
		const menuItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'menuItem');
		const notificationsItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications');
		expect(menuItem.length).toBe(1);
		expect(notificationsItem.length).toBe(1);
	});

	it('Notifications renders 3 NotificationItem elements', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('NotificationItem').length).toBe(3);
	});

	it('Notifications renders proper string', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find(
			'NotificationItem')
			.first().props().value).toEqual('New course available');
	});

	it('Notifications renders correctly when listNotifications=[]', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} listNotifications={[]} />);
		const menuItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'menuItem');
		const notificationsItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications');
		const noNewItems = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications')
			.find('p');
		expect(menuItem.length).toBe(1);
		expect(notificationsItem.length).toBe(1);
		expect(noNewItems.text()).toEqual('No new notification for now');
	});

	it('Notifications renders correctly when !listNotifications', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} />);
		const menuItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'menuItem');
		const notificationsItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications');
		const noNewItems = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications')
			.find('p');
		expect(menuItem.length).toBe(1);
		expect(notificationsItem.length).toBe(1);
		expect(noNewItems.text()).toEqual('No new notification for now');
	});

	it('Notifications renders correctly when listNotifications is set', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		const menuItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'menuItem');
		const notificationsItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications');
		const hereItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications')
			.find('p');
		const notifsList = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('id') === 'Notifications')
			.find('NotificationItem');
		expect(menuItem.length).toBe(1);
		expect(notificationsItem.length).toBe(1);
		expect(hereItem.text()).toEqual('Here is the list of notifications');
		expect(notifsList.length).toBe(3);
	});

	it('Notifications shouldComponentUpdate only updates on longer list', () => {
		const wrapper = shallow(
			<Notifications listNotifications={listNotifications}/>);
		expect(wrapper.instance()
			.shouldComponentUpdate({ listNotifications: [] })).toBe(false);
	});

	it('Notifications shouldComponentUpdate updates on longer list', () => {
		const wrapper = shallow(
			<Notifications listNotifications={listNotificationsShort}/>);
			expect(wrapper.instance()
			.shouldComponentUpdate({ listNotifications: listNotifications }))
			.toBe(true);
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
    wrapper
		.findWhere(n => n.prop('id') === 'notificationDiv')
		.findWhere(n => n.prop('id') === 'menuItem')
		.simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });
});
