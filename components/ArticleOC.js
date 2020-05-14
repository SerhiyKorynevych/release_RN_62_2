import React, { Component, useState } from 'react';
import RNTaboolaView from '@taboola/rnt-dev';
//import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, Button, Dimensions, ScrollView} from 'react-native';
import paragraphs from '../static/paragraphs';
import StyledText from "./styles/StyledText";
import BackButton from "./styles/BackButton";
import Header from "./styles/Header";
import ArticleWithFeed from "./ArticleWithFeed";




//export class ArticleOC extends Component {

const ArticleOC = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     height: 100,
  //     isModalVisible: false,
  //     urlClick:'',
  //   }
  // }


     const toggleModal = () => {
         setModal(!modal)
    };


    const feedHeight = Dimensions.get('window').height
    const [height, setHeight] = useState(feedHeight)
    const [defClick, setdefClick] = useState('')
    // const [modal, setModal] = useState(false)
    // const [modalClose, setModalClose] = useState(false)


    return (

        <View>
          <BackButton
              onPress={e => props.back()} title="Back" />

          <Header>Here's a Taboola OC</Header>

          {/*<Modal isVisible={modal}>*/}
          {/*  <View style={{flex: 1, marginTop: feedHeight/2.2}}>*/}
          {/*    <Text style={{backgroundColor:"red", padding: 25}}>You clicked on organic url - {defClick}</Text>*/}

          {/*    <Button title="Close" onPress={this.toggleModal} />*/}
          {/*  </View>*/}
          {/*</Modal>*/}
          <StyledText style={{textAlign: 'justify'}}>{paragraphs[1]}</StyledText>
            <View>
                <Text style={{backgroundColor:"green", padding: 25}}>You clicked on organic url - {defClick}</Text>
            </View>
          <ScrollView >
      <RNTaboolaView
          mode="thumbnails-feed"
          publisher="sdk-tester"
          pageType="article"
          pageUrl="https://blog.taboola.com"
          placement="Feed without video"
          targetType="mix"
        scrollEnabled={false}
        viewId= "12345"
        style={{ height}}
          onDidLoad={event => {
              setHeight((parseInt(event.nativeEvent.height, 10)) )
          }}
          onDidFailToLoad={event => {
              // collapse the taboola view if content fails to load
              setHeight(0);
          }}
          onOrganicItemClick={event => {
              setdefClick((event.nativeEvent.clickUrl));
              console.warn('Organic item was clicked!  - ' + event.nativeEvent.clickUrl );
              return true;
             // setModal(!modal)
              //this.setState({isModalVisible: !this.state.isModalVisible, urlClick: event.nativeEvent.clickUrl });
          }}
          onAdItemClick={event => {}}
      />
          </ScrollView >
      </View>

    );

};
ArticleOC.propTypes = { back: PropTypes.func.isRequired };

export default ArticleOC;
