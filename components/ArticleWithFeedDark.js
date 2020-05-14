import React, {useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';
import FeedDark from "./FeedDark";


const ArticleWithFeedDark = props => {

	return (
		<View style={{ flex: 1}}>
			<BackButton
				onPress={e => props.back()} title="Back" />

				<Header>Here's a Taboola Feed Dark</Header>
				{/*<StyledText style={{textAlign: 'justify'}}>{paragraphs[0]}</StyledText>*/}
				<StyledText style={{textAlign: 'justify'}}>{paragraphs[1]}</StyledText>
				{/*<StyledText style={{textAlign: 'justify'}}>{paragraphs[2]}</StyledText>*/}
				<ScrollView ><FeedDark />
			</ScrollView>
		</View>
	);
};

ArticleWithFeedDark.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithFeedDark;
