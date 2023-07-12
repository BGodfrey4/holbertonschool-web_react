import React from 'react';
import { shallow } from 'enzyme';

import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists());
  });

  it('renders one div with class bodySectionWithMargin', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.find('div.bodySectionWithMargin')).toHaveLength(1);
  });

  it('renders a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('BodySection')).toHaveLength(1);
    expect(wrapper.find('BodySection').props().title).toEqual('test title');
    expect(wrapper.find('BodySection').props().children).toEqual(<p>test children node</p>);
  });

 

});
