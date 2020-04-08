import * as React from 'react';
import Box from '../Box';

interface TextProps {
  children: object;
}

const Text = ({ children }: TextProps) => (
  <Box marginTop='30px'>
    <p>{children}</p>
  </Box>
);

export default Text;
