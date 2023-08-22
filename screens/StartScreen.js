import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	Dimensions,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import Btn from '../components/Button';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import Instructions from '../components/Instructions';

const StartScreen = ({ pickedNumber }) => {
	const [number, setNumber] = useState('');

	const handleNumberChange = (num) => {
		setNumber(num);
	};

	const { width, height } = useWindowDimensions();

	const resetInput = () => {
		setNumber('');
	};

	const checkInputHandler = () => {
		const convertNumber = parseInt(number);
		if (isNaN(convertNumber) || convertNumber <= 0 || convertNumber > 99) {
			Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [
				{ text: 'Okay', style: 'destructive', onPress: resetInput },
			]);
			return;
		}
		pickedNumber(convertNumber);
	};

	console.log(number);

	const marginTop = height < 380 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View style={[styles.screenContainer, { marginTop: marginTop }]}>
					<Title>Guess the Number</Title>
					<Card>
						<Instructions>Enter a Number</Instructions>
						<TextInput
							style={styles.textInput}
							maxLength={2}
							keyboardType="number-pad"
							autoCapitalize="none"
							value={number}
							onChangeText={handleNumberChange}
						/>
						<View style={styles.buttonOuterContainer}>
							<View style={styles.btnContainer}>
								<Btn onPressConfirm={resetInput}>Reset</Btn>
							</View>
							<View style={styles.btnContainer}>
								<Btn onPressConfirm={checkInputHandler}>Confirm</Btn>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};
export default StartScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	screenContainer: {
		flex: 1,
		// marginTop: deviceHeight < 400 ? 30 : 100,
		alignItems: 'center',
	},
	// inputContainer: {
	// 	marginTop: 100,
	// 	padding: 16,
	// 	backgroundColor: Colors.primary8,
	// 	marginHorizontal: 24,
	// 	borderRadius: 8,
	// 	elevation: 4,
	// 	shadowColor: 'black',
	// 	shadowOffset: { width: 0, height: 2 },
	// 	shadowRadius: 6,
	// 	shadowOpacity: 0.26,
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	textInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.secondary2,
		borderBottomWidth: 2,
		color: Colors.secondary2,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonOuterContainer: {
		flexDirection: 'row',
	},
	btnContainer: {
		flex: 1,
	},
});
