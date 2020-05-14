import React, {Component} from 'react';
import {View, ScrollView, Button} from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import CustomTextInput from './CustomTextInput';
import Label from './styles/Label';
import BackButton from './styles/BackButton';
import SubmitButton from './styles/SubmitButton';
import Header from './styles/Header';
import Feed from "./Feed";

const initialWidgetParams = {
  publisher: 'sdk-tester',
  mode: 'thumbnails-a',
  placement: 'Mid Article',
  pageUrl: 'https://blog.taboola.com',
  pageType: 'article',
  targetType: 'mix',
  setBackgroundColor: '',
};

class WidgetForm extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
  };

  state = {
    widgetParams: {...initialWidgetParams},
    widget: null,
  };

  buttonDisabled() {
    const vals = Object.values(this.state.widgetParams);
    return vals.some(val => !val);
  }

  setWidgetParam(param) {
    this.setState(prevState => {
      return {
        ...prevState,
        widgetParams: {
          ...prevState.widgetParams,
          ...param,
        },
      };
    });
  }

  render() {
    const {
      publisher,
      mode,
      pageType,
      pageUrl,
      placement,
      targetType,
      setBackgroundColor,
    } = this.state.widgetParams;

    return (
      <View>
        <ScrollView>
          <BackButton onPress={e => this.props.back()} title="Back" />
          {this.state.widget && (
            <>
              <Header>Here's your widget!</Header>
              <ScrollView>{this.state.widget}</ScrollView>
            </>
          )}
          <Label>Publisher</Label>
          <CustomTextInput
            value={publisher}
            onChangeText={text => this.setWidgetParam({publisher: text})}
            placeholder="sdk-tester"
          />
          <Label>Mode</Label>
          <CustomTextInput
            value={mode}
            onChangeText={text => this.setWidgetParam({mode: text})}
            placeholder="thumbnails-a"
          />
          <Label>Placement</Label>
          <CustomTextInput
            value={placement}
            onChangeText={text => this.setWidgetParam({placement: text})}
            placeholder="Mid Article"
            placeholderTextColor = "red"
          />
          <Label>Example Page Url</Label>
          <CustomTextInput
            value={pageUrl}
            onChangeText={text => this.setWidgetParam({pageUrl: text})}
          />
          <Label>Page Type</Label>
          <CustomTextInput
            value={pageType}
            onChangeText={text => this.setWidgetParam({pageType: text})}
            placeholder="article"
          />
          <Label>Target Type</Label>
          <CustomTextInput
            value={targetType}
            onChangeText={text => this.setWidgetParam({targetType: text})}
            placeholder="targetType"
          />
          <Label>BackgroundColor</Label>
          <CustomTextInput
              value={setBackgroundColor}
              onChangeText={text => this.setWidgetParam({setBackgroundColor: text})}
              placeholder="red"
          />
          <SubmitButton
            disabled={this.buttonDisabled()}
            onPress={e =>
              this.setState({widget: null}, () => {
                this.setState(prevState => {
                  return {
                    widgetParams: {...initialWidgetParams},
                    widget: <ScrollView ><Widget {...prevState.widgetParams} /></ScrollView >,
                  };
                });
              })
            }
            title="Submit"
          />
        </ScrollView>
      </View>
    );
  }
}

export default WidgetForm;
