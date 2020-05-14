import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';
import RNTaboolaView from '@taboola/rnt-dev';
//import { useDarkMode } from 'react-native-dark-mode'

const ArticleWithWidget = props => {
	//const isDarkMode = useDarkMode();
	return (
		// <View style={{ backgroundColor: isDarkMode ? 'black' : 'white' }} >
		<View >
			<BackButton onPress={e => props.back()} title="Back" />

				<Header>Here's a Taboola Widget</Header>
				{/*<StyledText>{paragraphs[0]}</StyledText>*/}
				<StyledText>{paragraphs[1]}</StyledText>
				{/*<StyledText>{paragraphs[2]}</StyledText>*/}
				<ScrollView><Widget />
			</ScrollView>
			<StyledText>{paragraphs[0]}</StyledText>
		</View>
	);
};

ArticleWithWidget.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidget;
