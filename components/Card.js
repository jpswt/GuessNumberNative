import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
const Card = ({ children }) => {
	return <View style={styles.inputContainer}>{children}</View>;
};
export default Card;
const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 40,
		padding: 16,
		backgroundColor: Colors.primary8,
		marginHorizontal: 24,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
