const CalculateTriangleArea = ({ base, height }) => {
	const area = (base * height) / 2;

	return <h2>El área del triángulo: {area}</h2>;
};

export default CalculateTriangleArea;
