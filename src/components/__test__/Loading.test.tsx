import React from 'react';
import { mount } from 'enzyme';
import Loading from '../Loading';

describe('<Loading />', () => {
  it('should render', () => {
    const wrapper = mount(<Loading isLoading />);

    expect(wrapper.find('Loading')).not.toBeNull();
  });
});
