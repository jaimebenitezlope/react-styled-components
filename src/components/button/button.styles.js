import styled from 'styled-components';

const StyledButton = styled.button`
	width: 150px;
	height: 45px;
	border-radius: 30px;
	border: transparent;
	color: ${({ $color }) => $color};
	margin-top: 340px;
	margin-left: 50px;
`;

export { StyledButton };
