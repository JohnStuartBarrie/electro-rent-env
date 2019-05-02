import React from 'react';
import { shallow } from 'enzyme';
import InfoText from './index.js';

test('render a InfoText', () => {
  const wrapper = shallow(
      <InfoText>Hello Jest!</InfoText>
  );
  expect(wrapper).toMatchSnapshot();
});
