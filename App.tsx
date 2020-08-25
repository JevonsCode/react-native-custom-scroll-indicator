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

    IconItem = ({ title }: { title: string }) => <View style={{
        justifyContent: "center",
        alignItems: "center", width: width / 5,
    }}>
        <View style={{
            width: 40, height: 40, margin: 4,
            backgroundColor: "#" + new Array(7).join(Math.floor(Math.random() * 10) + ""),
            borderRadius: 20
        }}></View>
        <Text>{title}</Text>
    </View>

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#eee" }}>
                <ScrollView>
                    <ScrollIndicator
                        indicatorBgPadding={6}
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
                        alwaysIndicatorBounce
                        indicatorBoxStyle={{
                            overflow: "visible"
                        }}
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

                    <ScrollIndicator
                        indicatorBoxStyle={{
                            overflow: "visible"
                        }}
                        viewBoxStyle={{
                            alignItems: "center",
                            marginTop: 60,
                            backgroundColor: "#fff",
                            paddingVertical: 20,
                            borderRadius: 10
                        }} scrollViewBoxStyle={{
                            width,
                        }} indicatorBackgroundStyle={{
                            backgroundColor: "#eee",
                            borderRadius: 4,
                            width: 20,
                            height: 4
                        }} indicatorStyle={{
                            backgroundColor: "#007FFF",
                            height: 4,
                            borderRadius: 4,
                        }}>
                        <View>
                            <this.IconItem title={"一个App"} />
                            <this.IconItem title={"美食"} />
                        </View>
                        <View>
                            <this.IconItem title={"外卖"} />
                            <this.IconItem title={"娱乐"} />
                        </View>
                        <View>
                            <this.IconItem title={"游戏"} />
                            <this.IconItem title={"送药上门"} />
                        </View>
                        <View>
                            <this.IconItem title={"打车"} />
                            <this.IconItem title={"运动健身"} />
                        </View>
                        <View>
                            <this.IconItem title={"学习"} />
                            <this.IconItem title={"前端"} />
                        </View>
                        <View>
                            <this.IconItem title={"react native"} />
                            <this.IconItem title={"教育培训"} />
                        </View>
                        <View>
                            <this.IconItem title={"景点/门票"} />
                            <this.IconItem title={"买菜"} />
                        </View>
                        <View>
                            <this.IconItem title={"不知道干啥"} />
                            <this.IconItem title={"Git"} />
                        </View>
                        <View>
                            <this.IconItem title={"嗯哼"} />
                            <this.IconItem title={"演出"} />
                        </View>
                        <View>
                            <this.IconItem title={"生活"} />
                            <this.IconItem title={"全部"} />
                        </View>
                    </ScrollIndicator>


                    <View style={{
                        width,
                        marginBottom: 400
                    }}>
                        <ScrollIndicator
                            viewBoxStyle={{
                                alignItems: "center",
                                marginTop: 60,
                                flex: 1
                            }} scrollViewBoxStyle={{
                                width: undefined
                            }}>
                            <this.Item />
                            <this.Item />
                            <this.Item />
                            <this.Item />
                            <this.Item />
                            <this.Item />
                        </ScrollIndicator>
                    </View>
                </ScrollView>
            </View>
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
