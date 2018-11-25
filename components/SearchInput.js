import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class SeachInput extends Component {
	state = {
		text: ''
	};

	handleChangeText = text => {
		this.setState({ text });
	};

	handleSubmitEditing = () => {
		if (!this.state.text) return;

		this.props.onSubmit(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		return (
			<View style={styles.searchBar}>
			<View style={styles.headerContainer}>
        
      </View>
				<TextInput
					value={this.state.text}
					autoCorrect={false}
					placeholder={this.props.placeholder}
					placeholderTextColor="#ffffff"
					underlineColorAndroid="transparent"
					style={styles.textInput}
					clearButtonMode="always"
					onChangeText={this.handleChangeText}
					onSubmitEditing={this.handleSubmitEditing}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	searchBar: {
		flex: 1,
		paddingTop: 50
	},
	textInput: {
		width: 300,
		height: 50,
		marginTop: 40,
		backgroundColor: '#666666',
		marginHorizontal: 20,
		paddingHorizontal: 10,
		alignSelf: 'center',
		color: '#ffffff'
	}
});

