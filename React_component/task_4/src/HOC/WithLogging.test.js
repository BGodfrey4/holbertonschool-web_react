import React  from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login'
global.console.log = jest.fn()
describe('WithLogging', () => {
  const login = shallow(<Login />);
  const loginWithLogging = shallow(<WithLogging><Login /></WithLogging>);
  it('will render without crashing', () => {
    expect(login.length).toEqual(1);
  });
  it('will render the wrapped component', () => {
    expect(loginWithLogging.length).toEqual(1);
  });
});
