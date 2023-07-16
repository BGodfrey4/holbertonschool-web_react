/**
 * Test ENV
 */
import Footer from './Footer';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AppContext } from "../App/AppContext";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Footer component renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find("p").text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(false)}`);
  });

  it("Tests that there is no link rendered when user is logged out within context", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(0);
    expect(wrapper.find("a").exists()).toBe(false);
    expect(wrapper.text()).not.toContain("Contact us");

    wrapper.unmount();
  });

  it("Tests that there is a link rendered when user is logged in within context", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(1);
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.text()).toContain("Contact us");

    wrapper.unmount();
  });
});
