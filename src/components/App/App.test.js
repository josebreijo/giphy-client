import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.component';
import Gif from '../Gif/';
import Spinner from '../Spinner/';
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

describe('App component', () => {
  it('should render', () => {
    expect(shallow(<App />).isEmptyRender()).toEqual(false);
  });

  it('should match snapshots', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('should fetch a new gif on mounting', () => {
    mount(<App />);
    expect(getRandomGif).toHaveBeenCalled();
  });

  it('should load the spinner if no gif is loaded', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Spinner />)).toBe(true);
  });

  it('should render a gif if the component has the gif info', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ randomGifData });
    expect(wrapper.containsMatchingElement(<Gif />)).toBe(true);
  });

  it('should fetch a new gif if the button is clicked', () => {
    const wrapper = mount(<App />);
    wrapper.find('button').simulate('click');
    expect(getRandomGif).toHaveBeenCalled();
  });
});
