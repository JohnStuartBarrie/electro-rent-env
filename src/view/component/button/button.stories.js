import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index.js'

storiesOf('Button', module)
  .addParameters({
    info: {
      inline: false,
      header: false,
      source:true,
      text: `
        This is a simple and dodgy button
      `
    }
  })
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('dood')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
