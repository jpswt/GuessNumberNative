import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../constants/colors';

const Title = ({ children }) => {
	return (
		<View>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontFamily: 'open-sans-bold',
		color: Colors.secondary2,
		textAlign: 'center',
		// borderWidth: Platform.OS === 'ios' ? 0 : 2,
		borderWidth: Platform.select({ ios: 0, android: 2 }),
		borderColor: Colors.secondary2,
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
});
