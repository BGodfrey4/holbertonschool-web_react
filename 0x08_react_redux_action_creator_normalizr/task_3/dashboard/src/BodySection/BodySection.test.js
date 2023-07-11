import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists());
  });

  it('renders one div with class bodySection', () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.find('div.bodySection')).toHaveLength(1);
  });

  // Component should render correctly the children and one h2 element
  it('renders the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
