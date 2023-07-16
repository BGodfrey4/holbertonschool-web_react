import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';

window.alert = sinon.spy()

configure({adapter: new Adapter()});

describe('<App />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it('App will render succcessfully', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});

	it('App performs Login if isLoggedIn=false', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('CourseList').length).toBe(0);
	});

	it('App successfully renders CourseList if isLoggedIn=true', () => {
		const wrapper = shallow(<App isLoggedIn={true}/>);
		expect(wrapper.find('Login').length).toBe(0);
		expect(wrapper.find('CourseList').length).toBe(1);
	});

	it('Notifications renders successfully', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Notifications').exists()).toBe(true);
	});

	it('Header successfully passes', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Header').exists()).toBe(true);
	});

	it('Login passes successfully', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Login').exists()).toBe(true);
	});

	it('Footer passes successfully', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Footer').exists()).toBe(true);
	});

	it(' Display Drawer is false & hide/display work', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state('displayDrawer')).toBe(false);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state('displayDrawer')).toBe(true);
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state('displayDrawer')).toBe(false);
	});
})
