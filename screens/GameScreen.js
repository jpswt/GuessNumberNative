import { Alert, StyleSheet, Text, View, FlatList } from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/Number';
import { useEffect, useState } from 'react';
import Btn from '../components/Button';
import Card from '../components/Card';
import Instructions from '../components/Instructions';
import { Ionicons } from '@expo/vector-icons';
import GuessLog from '../components/GuessLog';

const generateRandom = (min, max, exclude) => {
	const randomNum = Math.floor(Math.random() * (max - min)) + min;

	if (randomNum === exclude) {
		return generateRandom(min, max, exclude);
	} else {
		return randomNum;
	}
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOverHandler }) => {
	const initialGuess = generateRandom(1, 100, userNumber);
	const [guess, setGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		if (guess === userNumber) {
			gameOverHandler(guessRoundLength);
		}
	}, [guess, userNumber, gameOverHandler]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	const nextGuess = (direction) => {
		if (
			(guess < userNumber && direction === 'lower') ||
			(guess > userNumber && direction === 'higher')
		) {
			Alert.alert("Don't lie", 'you know this is incorrect', [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = guess;
		} else {
			minBoundary = guess + 1;
		}
		const newRndNum = generateRandom(minBoundary, maxBoundary, guess);
		setGuess(newRndNum);
		setGuessRounds((prevRounds) => [newRndNum, ...prevRounds]);
	};

	const guessRoundLength = guessRounds.length;

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{guess}</NumberContainer>
			<Card>
				<Instructions style={styles.instructions}>Higher or Lower</Instructions>
				<View style={styles.btns}>
					<View style={styles.btn}>
						<Btn onPressConfirm={nextGuess.bind(this, 'higher')}>
							<Ionicons name="md-add" size={24} />
						</Btn>
					</View>
					<View style={styles.btn}>
						<Btn onPressConfirm={nextGuess.bind(this, 'lower')}>
							<Ionicons name="md-remove" size={24} />
						</Btn>
					</View>
				</View>
			</Card>
			<View style={styles.listContainer}>
				{/* {guessRounds.map((round) => (
					<Text key={round}>{round}</Text>
				))} */}
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLog
							roundNumber={guessRoundLength - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
};
export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: 60,
		paddingHorizontal: 30,
	},
	instructions: {
		marginBottom: 12,
	},
	btns: {
		flexDirection: 'row',
	},
	btn: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});
