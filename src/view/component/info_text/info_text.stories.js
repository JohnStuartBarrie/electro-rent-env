import React from 'react';
import { storiesOf } from '@storybook/react';

import InfoText from './index.js'

storiesOf('InfoText', module).add('with text', () => <InfoText>This is a test text</InfoText> );
storiesOf('InfoText', module).add('without text', () => <InfoText></InfoText> );


