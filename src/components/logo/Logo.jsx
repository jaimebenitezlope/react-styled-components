import { StyledLogo } from './logo.styles';

const Logo = ({ $logo, children }) => {
	return <StyledLogo src={$logo} />;
};

export default Logo;
