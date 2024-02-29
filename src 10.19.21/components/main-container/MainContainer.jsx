import Card from '../card/Card';
import { StyledMainContainer } from './main-container.styles';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			<Card
				logo='/assets/images/icon-sedans.svg'
				title='SEDANS'
				text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				color='#E28625'
			/>
			<Card
				logo='/assets/images/icon-suvs.svg'
				title='SUVS'
				text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				color='#006971'
			/>
			<Card
				logo='/assets/images/icon-luxury.svg'
				title='LUXURY'
				text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
				color='#004140'
			/>
		</StyledMainContainer>
	);
};

export default MainContainer;
