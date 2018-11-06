import React from 'react';
import { shallow, mount } from 'enzyme';
import Random from './Random.component';
import Gif from '../Gif';
import Spinner from '../Spinner';
import { getRandomGif } from '../../api';

jest.mock('../../api', () => ({ getRandomGif: jest.fn() }));

const randomGifData = {
  data: {
    title: 'My gif',
    images: {
      original: { url: 'http://thegifurl.com' },
    },
  },
};

describe('Random component', () => {
  it('should render', () => {
    expect(shallow(<Random />).isEmptyRender()).toEqual(false);
  });

  it('should match snapshots', () => {
    expect(shallow(<Random />)).toMatchSnapshot();
  });

  it('should fetch a new gif on mounting', () => {
    mount(<Random />);
    expect(getRandomGif).toHaveBeenCalled();
  });

  it('should load the spinner if no gif is loaded', () => {
    const wrRandomer = shallow(<Random />);
    expect(wrRandomer.containsMatchingElement(<Spinner />)).toBe(true);
  });

  it('should render a gif if the component has the gif info', () => {
    const wrRandomer = mount(<Random />);
    wrRandomer.setState({ randomGifData });
    expect(wrRandomer.containsMatchingElement(<Gif />)).toBe(true);
  });

  it('should fetch a new gif if the button is clicked', () => {
    const wrRandomer = mount(<Random />);
    wrRandomer.find('button').simulate('click');
    expect(getRandomGif).toHaveBeenCalled();
  });
});
