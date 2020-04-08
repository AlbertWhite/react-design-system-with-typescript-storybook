import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

type BoxProps = ColorProps & SpaceProps;

const Box = styled.div<BoxProps>`
  ${color}
  ${space},
`;

export default Box;
