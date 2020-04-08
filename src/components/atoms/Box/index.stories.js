import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './';

storiesOf('1. Box', module).add('Default', () => (
  <Box marginTop='50px'>Box with MarginTop 50px</Box>
));
