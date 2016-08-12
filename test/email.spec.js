import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Email from '../lib/email';

describe('<Email>', () => {
  it('should have an input for the email', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });

  it('should have a button', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

  it('should have props for handleEmailChange and fetchGravatar', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.props().handleEmailChange).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  });

});
