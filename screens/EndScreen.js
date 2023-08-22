import { StyleSheet, Text, View, Image } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/colors';
import Btn from '../components/Button';

const EndScreen = ({ rounds, userNumber, startNewGame }) => {
	return (
		<View style={styles.screen}>
			<Title>Game Over</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/success.png')}
				/>
			</View>
			<View>
				<Text style={styles.summaryText}>
					Your phone needed <Text style={styles.highlight}>{rounds}</Text>{' '}
					Rounds to find Number:{' '}
					<Text style={styles.highlight}>{userNumber}</Text>
				</Text>
			</View>
			<Btn onPressConfirm={startNewGame}>New Game</Btn>
		</View>
	);
};
export default EndScreen;
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderWidth: 2,
		borderColor: Colors.primary8,
		borderRadius: 150,
		overflow: 'hidden',
		margin: 36,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 20,
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary5,
	},
});
