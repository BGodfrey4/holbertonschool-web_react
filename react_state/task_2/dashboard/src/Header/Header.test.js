import Header from './Header';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

describe('Header', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it('Header renders w/o crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBe(true);
		jest.useFakeTimers();
		jest.runAllTimers();
	});

	it('Header renders img and h1', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('img').exists()).toBe(true);
		expect(wrapper.find('h1').exists()).toBe(true);
		jest.useFakeTimers();
		jest.runAllTimers();
	});
});
