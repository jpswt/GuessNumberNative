import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	useWindowDimensions,
	ScrollView,
} from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/colors';
import Btn from '../components/Button';

const EndScreen = ({ rounds, userNumber, startNewGame }) => {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 380) {
		imageSize = 150;
	}

	if (height < 400) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.screen}>
				<Title>Game Over</Title>
				<View style={[styles.imageContainer, imageStyle]}>
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
		</ScrollView>
	);
};
export default EndScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	screen: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		// width: deviceWidth < 380 ? 150 : 300,
		// height: deviceWidth < 380 ? 150 : 300,
		borderWidth: 2,
		borderColor: Colors.primary8,
		borderRadius: deviceWidth < 380 ? 75 : 150,
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
