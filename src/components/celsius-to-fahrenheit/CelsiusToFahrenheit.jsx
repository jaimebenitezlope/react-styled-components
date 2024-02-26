const CelsiusToFahrenheit = ({ celsius }) => {
	const fahrenheit = celsius * 1.8 + 32;

	return (
		<h2>{`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit`}</h2>
	);
};

export default CelsiusToFahrenheit;
