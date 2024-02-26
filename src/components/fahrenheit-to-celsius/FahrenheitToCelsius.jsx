const FahrenheitToCelsius = ({ fahrenheit }) => {
	const celsius = (fahrenheit - 32) / 1.8;

	return (
		<h2>{`${fahrenheit} grados Fahrenheit son ${celsius} grados Celsius`}</h2>
	);
};

export default FahrenheitToCelsius;
