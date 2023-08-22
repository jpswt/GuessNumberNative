import { StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../constants/colors';

const Btn = ({ children, onPressConfirm }) => {
	const pressHandler = () => {
		console.log('Pressed!');
	};

	return (
		<View style={styles.outerContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.innerContainer, styles.pressed]
						: styles.innerContainer
				}
				onPress={onPressConfirm}
				android_ripple={{ color: '#2c6ab0' }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};
export default Btn;

const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
	},
	innerContainer: {
		backgroundColor: Colors.primary5,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});
