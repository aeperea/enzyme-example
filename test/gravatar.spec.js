import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import md5 from 'md5';

// Gravatar's API uses an MD5 hash to obscure email addresses, so we'll use md5 to
// create a hash of the email

import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import Email from '../lib/email';

describe('<Gravatar />', () => {
  it('contains an <Avatar /> component', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('contains an <Email /> component', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial email state', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.state().email).to.equal('elizondoperea@gmail.com');
  });

  it('should have an initual src state', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', () => {
    const wrapper = mount(<Gravatar />);
    wrapper.setState({email: 'elizondoperea@gmail.com' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).to.equal('elizondoperea@gmail.com');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('elizondoperea@gmail.com')}?s=200`);
  });

});
