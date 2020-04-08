import * as React from 'react';

interface TextProps {
  children: object;
}

const Text = ({ children }: TextProps) => <p>{children}</p>;

export default Text;
