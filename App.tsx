/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
} from 'react-native';

import ScrollIndicator from "./src";

const width = Dimensions.get("screen").width;
const margin = 3;
const itemWidth = width / 3 - margin * 2;

class App extends React.PureComponent {


    Item = () => <View style={[styles.item, { backgroundColor: "#" + new Array(7).join(Math.floor(Math.random() * 10) + "") }]}></View>;

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <ScrollIndicator
                        viewBoxStyle={{
                            alignItems: "center",
                            marginTop: 60
                        }}
                        indicatorBackgroundStyle={{
                            height: 4,
                            width: 40,
                            borderRadius: 5
                        }} indicatorStyle={{
                            height: 2,
                            width: 40,
                            borderRadius: 4
                        }} indicatorBoxStyle={{
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center"
                        }} scrollViewBoxStyle={{
                            borderWidth: 2,
                            width: 300,
                            borderColor: "red"
                        }}>
                        <this.Item />
                        <this.Item />
                        <this.Item />
                        <this.Item />
                        <this.Item />
                        <this.Item />
                    </ScrollIndicator>


                    <ScrollIndicator
                        indicatorBgPadding={6}
                        viewBoxStyle={{
                            alignItems: "center",
                            marginTop: 60
                        }} scrollViewBoxStyle={{
                            width,
                        }}>
                        <this.Item />
                        <this.Item />
                        <this.Item />
                        <this.Item />
                        <this.Item />
                        <this.Item />
                    </ScrollIndicator>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: itemWidth,
        height: 140,
        marginHorizontal: margin
    }

});

export default App;
