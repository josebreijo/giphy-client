import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner.component';

describe('Spinner component', () => {
  let wrapper = shallow(<Spinner />);

  it('should render', () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
