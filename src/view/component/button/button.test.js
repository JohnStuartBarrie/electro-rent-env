import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './index.js';

test('render a Button', () => {
  const wrapper = mount(
      <Button>My Button</Button>
  );
  expect(wrapper).toMatchSnapshot();
});

test('click on the Button', () => {
  const onclick = jest.fn();
  const wrapper = shallow(
      <Button onClick={onclick}>My Button</Button>
  );
  wrapper.simulate('click')
  expect(onclick).toHaveBeenCalled()
});
