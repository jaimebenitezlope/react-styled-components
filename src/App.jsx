// const name = 'Dorian';
// const number = 26;
// const boolean = true;
// const isUndefined = undefined;
// const isNull = null;
// const numbers = [1, 2, 3, 4, 5];
// const obj = { a: 1, b: 2 };

import SayHello from './components/say-hello/SayHello';
import CalculateSquareArea from './components/calculate-square-area/CalculateSquareArea';
import CalculateTriangleArea from './components/calculate-triangle-area/CalculateTriangleArea';
import CalculateCircleArea from './components/calculate-circle-area/CalculateCircleArea';
import CelsiusToFahrenheit from './components/celsius-to-fahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheit-to-celsius/FahrenheitToCelsius';
import TotalPrice from './components/total-price/TotalPrice';
import WriteMessage from './components/write-message/WriteMessage';

const App = () => {
	return (
		<>
			<SayHello name='jaime' />
			<CalculateSquareArea sideLength={5} />
			<CalculateTriangleArea base={4} height={3} />
			<CalculateCircleArea radius={6} />
			<CelsiusToFahrenheit celsius={30} />
			<FahrenheitToCelsius fahrenheit={4} />
			<TotalPrice price={20} />
			<WriteMessage
				name={'Pepe'}
				material={'chocolates'}
				size={'extragrande'}
				note={'cuidado con el perro'}
			/>
		</>
	);
};

export default App;
