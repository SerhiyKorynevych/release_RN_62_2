import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';

const ArticleWithWidgetInFlatList = props => {
	const p1 = <StyledText key="p1">{paragraphs[0]}</StyledText>;

	const p2 = <StyledText key="p2">{paragraphs[1]}</StyledText>;
	return (
		<View>
			<BackButton onPress={e => props.back()} title="Back" />

				<Header>Here's a Taboola Widget</Header>
				<FlatList
					style={{ flex: 1 }}
					data={[{ key: 'p1' }, { key: 'p3' }, { key: 'taboola' },  { key: 'p2' } ]}
					renderItem={({ item }) => {
						switch (item.key) {
							case 'p1':
								return p1;
							case 'p2':
								return p2;
							case 'p3':
								return p1;
							case 'taboola':
								return <ScrollView><Widget /></ScrollView>;
							default:
								return null;
						}
					}}
				/>

		</View>
	);
};

ArticleWithWidgetInFlatList.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidgetInFlatList;
