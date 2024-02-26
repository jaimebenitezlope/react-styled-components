const CalculateCircleArea = ({ radius }) => {
	const area = Math.PI * radius * radius;

	return <h2>El área del círculo es {area}</h2>;
};

export default CalculateCircleArea;
