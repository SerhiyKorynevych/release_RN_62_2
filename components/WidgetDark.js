import React, {useState} from 'react';
import RNTaboolaView from '@taboola/rnt-dev';
import PropTypes from 'prop-types';

const WidgetDark = props => {
  const [height, setHeight] = useState(0);

  return (
    <RNTaboolaView
      mode={props.mode}
      publisher={props.publisher}
      pageType={props.pageType}
      pageUrl={props.pageUrl}
      placement={props.placement}
      targetType={props.targetType}
      scrollEnabled={false}
      darkMode={true}
      viewID={props.viewID}
      style={{
        height,
        width: '100%',
        backgroundColor: props.setBackgroundColor,
      }}
      onDidLoad={event => {
        // Set the height of the widget dynamically
        setHeight(parseInt(event.nativeEvent.height, 10));
      }}
      onDidFailToLoad={event => {}}
      onOrganicItemClick={event => {
        // implement logic for opening content in-app here
        console.warn('Organic item was clicked!');
        return true;
      }}
      onAdItemClick={event => {}}
    />
  );
};

WidgetDark.defaultProps = {
  mode: 'alternating-widget-1x2',
  publisher: 'sdk-tester-demo',
  pageType: 'article',
  pageUrl: 'https://blog.taboola.com',
  placement: 'Mid Article',
  targetType: 'mix',
  //viewID: '12345',
  viewID: new Date().getTime().toString(),
  setBackgroundColor: '',
};

WidgetDark.propTypes = {
  mode: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  targetType: PropTypes.string.isRequired,
  viewID: PropTypes.string,
    setBackgroundColor: PropTypes.string,
};

export default WidgetDark;
