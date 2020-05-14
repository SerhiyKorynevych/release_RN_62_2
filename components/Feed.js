import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import RNTaboolaView from '@taboola/rnt-dev';
import PropTypes from 'prop-types';


const Feed = props => {
	// Get the dimensions of the screen and set the feed height to twice the screen height
	const feedHeight = Dimensions.get('window').height * 2
	const [height, setHeight] = useState(feedHeight)

	return (
		<RNTaboolaView
			viewID={props.viewID}
			mode={props.mode}
			publisher={props.publisher}
			pageType={props.pageType}
			pageUrl={props.pageUrl}
			placement={props.placement}
			targetType={props.targetType}
			interceptScroll={true}
			// scrollEnabled={false} //ios
			style={{ height, width: '100%' }}
			onDidLoad={event => {
				setHeight((parseInt(event.nativeEvent.height, 10)) )
			}}
			onDidFailToLoad={event => {
				// collapse the taboola view if content fails to load
				setHeight(0);
			}}
			onOrganicItemClick={event => {
				// implement logic for opening content in-app here
				console.warn('Organic item was clicked!');
				return true;
			}}
			onAdItemClick={event => {}}
		/>
	);
};

Feed.defaultProps = {
	mode: 'thumbnails-a',
	publisher: 'sdk-tester',
	pageType: 'article',
	pageUrl: 'https://blog.taboola.com',
	placement: 'Feed with video',
	targetType: 'mix',
};

Feed.propTypes = {
	mode: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	pageType: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
	viewID: PropTypes.string,
};

export default Feed;
