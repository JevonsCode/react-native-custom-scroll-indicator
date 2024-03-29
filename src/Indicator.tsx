import React from "react";

import {
  View,
  Animated,
  ViewStyle,
  NativeSyntheticEvent,
  ScrollViewProps,
} from "react-native";

export interface IIndicator {
  /** 整个组件的 View Box 样式 */
  viewBoxStyle?: ViewStyle;
  /** 横向滑动 ScrollView 外的 View 的样式 */
  scrollViewBoxStyle?: ViewStyle;
  /** 横向滑动的 ScrollView 样式 */
  scrollViewStyle?: ViewStyle;
  /** 指示器背景增加的长度（多出来的长度） */
  indicatorBgPadding?: number;
  /** 指示器的背景样式 （背景宽度，默认加上指示器宽度） */
  indicatorBackgroundStyle?: ViewStyle;
  /** 指示器样式 */
  indicatorStyle?: ViewStyle;
  /** 指示器外的 View 的样式 */
  indicatorBoxStyle?: ViewStyle;
  /** 滑动时的回调 */
  onScrollListener?: (e: NativeSyntheticEvent<unknown>) => void;
  /** 总是开启指示器的回弹效果 */
  alwaysIndicatorBounce?: boolean;
  /** Animated.ScrollView 的原生参数 */
  animatedScrollViewParams?: ScrollViewProps;
}

interface INativeEvent {
  contentSize?: {
    width?: number;
  };
  layoutMeasurement?: {
    width?: number;
  };
}

export class Indicator extends React.PureComponent<
  IIndicator,
  { leftValue: number }
> {
  leftValue = new Animated.Value(0);

  bgWidth = 1;

  defaultParams = {
    indicatorWidth: 20,
    indicatorHeight: 4,
    indicatorBgWidth: 140,
    indicatorBgHeight: 8,
  };

  state = {
    leftValue: 0,
  };

  componentDidMount() {
    this.leftValue.addListener(({ value }) => {
      this.setState({
        leftValue: value,
      });
    });
  }

  render() {
    const {
      children,
      viewBoxStyle,
      scrollViewBoxStyle,
      indicatorBoxStyle,
      scrollViewStyle,
      indicatorBgPadding = 0,
      indicatorBackgroundStyle,
      indicatorStyle,
      alwaysIndicatorBounce,
      animatedScrollViewParams,
    } = this.props;

    const onScroll = Animated.event<INativeEvent>(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: this.leftValue,
            },
          },
        },
      ],
      { useNativeDriver: true, listener: (e) => this.onScrollListener(e) }
    );

    const indicatorBgWidth = +(
      indicatorBackgroundStyle?.width || this.defaultParams.indicatorBgWidth
    );

    const indicatorWidth = +(
      indicatorStyle?.width || this.defaultParams.indicatorWidth
    );

    let translateX =
      this.state.leftValue * (indicatorBgWidth / this.bgWidth) -
      indicatorBgWidth / 2;

    if (!alwaysIndicatorBounce) {
      if (translateX < -indicatorBgWidth / 2)
        translateX = -indicatorBgWidth / 2;
      if (translateX > indicatorBgWidth / 2) translateX = indicatorBgWidth / 2;
    }

    return (
      <View style={viewBoxStyle}>
        <View
          style={[
            {
              width: indicatorBgWidth,
            },
            scrollViewBoxStyle,
          ]}
        >
          <Animated.ScrollView
            alwaysBounceVertical={false}
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
            horizontal
            onScroll={onScroll}
            style={scrollViewStyle}
            {...animatedScrollViewParams}
          >
            {children && children}
          </Animated.ScrollView>
        </View>

        <View
          style={[
            {
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              height: this.defaultParams.indicatorBgHeight,
              overflow: "hidden",
            },
            indicatorBoxStyle,
            {
              width: indicatorBgWidth + indicatorWidth + indicatorBgPadding,
            },
          ]}
        >
          <View
            style={[
              {
                position: "absolute",
                backgroundColor: "#ccc",
                height: this.defaultParams.indicatorBgHeight,
                paddingHorizontal: indicatorWidth / 2,
              },
              indicatorBackgroundStyle,
              {
                width: indicatorBgWidth + indicatorWidth + indicatorBgPadding,
              },
            ]}
          ></View>
          <Animated.View
            style={[
              {
                width: indicatorWidth,
                height: this.defaultParams.indicatorHeight,
                backgroundColor: "#333",
                transform: [
                  {
                    translateX,
                  },
                ],
              },
              indicatorStyle,
            ]}
          ></Animated.View>
        </View>
      </View>
    );
  }

  onScrollListener(e: NativeSyntheticEvent<INativeEvent>) {
    const nativeEvent = e.nativeEvent;
    this.bgWidth =
      (nativeEvent?.contentSize?.width || 0) -
      (nativeEvent?.layoutMeasurement?.width || 0);

    this.props.onScrollListener && this.props.onScrollListener(e);
  }
}
