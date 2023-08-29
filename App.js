import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartScreen from './screens/StartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useCallback } from 'react';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const [gameOver, setGameOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const pickedNumber = (pickedNumber) => {
		setUserNumber(pickedNumber);
		setGameOver(false);
		setGuessRounds((currentRound) => currentRound + 1);
	};

	const gameOverHandler = (number) => {
		setGameOver(true);
		setGuessRounds(number);
	};

	const startNewGameHandler = () => {
		setUserNumber(null);
		setGuessRounds(0);
	};

	let screen = <StartScreen pickedNumber={pickedNumber} />;

	if (userNumber) {
		screen = (
			<GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
		);
	}

	if (gameOver && userNumber) {
		screen = (
			<EndScreen
				userNumber={userNumber}
				rounds={guessRounds}
				startNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<>
			<StatusBar style="light" />
			<LinearGradient colors={['#062848', '#2fd1dd']} style={styles.container}>
				<ImageBackground
					style={styles.image}
					source={require('./assets/images/background.png')}
					resizeMode="cover"
					imageStyle={{ opacity: 0.25 }}
				>
					<SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
						{screen}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
	},
});
