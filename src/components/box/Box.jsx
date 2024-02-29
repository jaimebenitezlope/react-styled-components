import { StyledBox } from './box.styles';

const Box = ({ $color, children }) => {
	return <StyledBox $color={$color}>{children}</StyledBox>;
};

export default Box;
