import Title from './components/title/Title.jsx';
import Box from './components/box/Box.jsx';
import Container from './components/container/Container.jsx';
import Logo from './components/logo/Logo.jsx';
import Text from './components/text/Text.jsx';
import Button from './components/button/button.jsx';

const App = () => {
	return (
		<>
			<Container>
				<Box $color='#E28625'>
					<Logo />
					<Title />
					<Text />
					<Button $color='#F2F2F2' />
				</Box>
				<Box $color='#006971'>
					<Title />
					<Text />
					<Button $color='#F2F2F2' />
				</Box>
				<Box $color='#004140'>
					<Title />
					<Text />
					<Button $color='#F2F2F2' />
				</Box>
			</Container>
		</>
	);
};

export default App;
