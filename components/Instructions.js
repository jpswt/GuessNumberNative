import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const Instructions = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};
export default Instructions;

const styles = StyleSheet.create({
	text: {
		color: Colors.primary5,
		fontSize: 24,
		fontFamily: 'open-sans',
	},
});
