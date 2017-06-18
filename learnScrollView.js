import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Dimensions = require("Dimensions");
var ImageData = require('./imgData.json');
var { width, height } = Dimensions.get('window');

var learnScrollView = React.createClass({
    getInitialState() {
        return {
            currentPage: 0
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.pageView}>
                    {this.renderPageDot()}
                </View>
            </View>

        );
    },
    renderAllImage() {
        var allImage = [];
        var imgsArr = ImageData.data;
        for (var i = 0; i < imgsArr.length; i++) {
            var imgItem = imgsArr[i];
            allImage.push(
                <Image key={i} source={{ uri: imgItem.img }} style={{ width: width, height: height * 0.2 }} />
            );
        }
        return allImage;
    },
    renderPageDot() {
        var indicatorArr = [];
        var imgsArr = ImageData.data;
        var style;
        for (var i = 0; i < imgsArr.length; i++) {
            style = (i == this.state.currentPage) ? { color: 'orange' } : { color: 'white' };
            indicatorArr.push(<Text style={[{ fontSize: 20 }, style]}>&bull;</Text>);
        }

        return indicatorArr;
    },
    onAnimationEnd(e) {
        var offsetX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offsetX / width);

        this.setState({
            currentPage: currentPage
        });
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 25,
        width: width
    },
    pageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        backgroundColor: 'rgba(0,0,0,0.25)',
        height: 20,
        position: 'absolute',
        bottom: 0        
    }
}
);

module.exports = learnScrollView;