import * as React from 'react';

interface LinkProps {
  children: object;
  props: object;
}

const Link = ({ children, ...props }: LinkProps) => (
  <a {...props}>{children}</a>
);

export default Link;
