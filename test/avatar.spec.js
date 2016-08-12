import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Avatar from '../lib/avatar';

// We will be creating a very simple component that will grab a profile
// image from Gravatar when a user puts their email in and clicks a "fetch" button.


describe('<Avatar />', () => {
  it('should have an image to display the gravatar', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });

});

// const wrapper = shallow(<Avatar/>);
// the shallow method allows us to 'shallowly' render a component.
// this isolates one component for testing and ensure child components do not affect asserts

// enzyme gives us other methods to render components:
// shallow, mount, static

// mount -> is "REAL" rendering into your browser environment. This is for full React components
// not only for stateless components, that have LIFECYCLE methods (we use jsdom to accompish rendering
// in a browser-like env, but you can also use the browsy)

// static -> This is for analyzing the actual HTML output of a component

// we'll use chai's expect assertion-style methods in the tests

