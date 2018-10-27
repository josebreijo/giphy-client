import React from 'react';
import { shallow } from 'enzyme';
import Gif from './Gif.component';

const info = {
  data: {
    title: 'My gif',
    images: {
      original: { url: 'http://thegifurl.com' },
    },
  },
};

describe('Spinner component', () => {
  let wrapper = shallow(<Gif info={info} />);

  it('should render', () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper attributes', () => {
    const props = wrapper.props();
    expect(props.alt).toEqual(info.data.title);
    expect(props.src).toEqual(info.data.images.original.url);
  });
});
