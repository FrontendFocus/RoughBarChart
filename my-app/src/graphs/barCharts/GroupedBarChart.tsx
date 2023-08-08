import * as React from "react";
import { useState } from "react";
import { Dimensions, View } from "react-native";
import { YAxis, BarChart, XAxis } from "../../src";
import { color } from "../../assets/colorConstant";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../assets/responsiveSize";

import { Svg, Line } from "react-native-svg";
import Tooltip from "../lineCharts/Components/tooltip";
const GroupedBarChart = (props) => {
  const [componentWidth, setComponentWidth] = useState(0);
  const [state, setState] = useState({
    tooltipX: null,
    tooltipY: null,
    tooltipIndex: null,
  });
  const BarData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 3398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const xAxisHeight = 20;
  const ChartHeight = 200;
  const BarData1 = BarData.map(({ uv }) => {
    return uv;
  });
  const BarData2 = BarData.map(({ pv }) => {
    return pv;
  });
  const BarData3 = BarData.map(({ amt }) => {
    return amt;
  });


  const BarDataY1 = BarData1.map((value, index) => ({
    value,
    svg: {
      hachureAngle: 60,
      hachureGap: 2,
      fill: color.BRIGHT_GREEN,
      onPress: () => {
        setState({
          ...state,
          tooltipX: index,
          tooltipY: value,
          tooltipIndex: index,
        });
      },

      key: `bar1-${index}`,
    },
  }));
  const BarDataY2 = BarData2.map((value, index) => ({
    value,
    svg: {
      hachureAngle: 60,
      hachureGap: 2,
      fill: color.LIGHT_BLUE,
      onPress: () => {
        setState({
          ...state,
          tooltipX: index,
          tooltipY: value,
          tooltipIndex: index,
        });
      },

      key: `bar2-${index}`,
    },
  }));
  const BarDataY3 = BarData3.map((value, index) => ({
    value,
    svg: {
      hachureAngle: 60,
      hachureGap: 2,
      fill: color.YELLOW,
      onPress: () => {
        setState({
          ...state,
          tooltipX: index,
          tooltipY: value,
          tooltipIndex: index,
        });
      },

      key: `bar3-${index}`,
    },
  }));
  const data = [
    {
      data: BarDataY1,
    
    },
    {
      data: BarDataY2,
     
    },
    {
      data: BarDataY3,
    
    },
  ];
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View
        style={{
          height: moderateScaleVertical(250),
          flexDirection: "row",
          padding: moderateScaleVertical(11),
        }}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setComponentWidth(width);
        }}
      >
        <YAxis
          data={data}
          style={{
            paddingBottom: xAxisHeight,
            height: "100%",
            marginHorizontal: moderateScale(2),
          }}
          svg={{
            fontSize: textScale(9),
            fontWeight: "bold",
            fill: "black",
          }}
          contentInset={{
            top: moderateScale(20),
            bottom: moderateScaleVertical(8),
          }}
          min={0}
          max={90}
          numberOfTicks={9}
          formatLabel={(value) => `${value}`}
        />

        <View
          style={{
            width: Dimensions.get("window").width - moderateScale(32),
            // backgroundColor:'red'
          }}
        >
          <BarChart
            style={{
              height: ChartHeight,
              marginBottom: moderateScaleVertical(10),
            }}
            data={data}
            gridMin={0}
            gridMax={9000}
            spacingInner={0.2}
            spacingOuter={0.4}
            yAccessor={({ item }) => item.value}
          >
              {state.tooltipIndex !== null && (
              <Tooltip
                tooltipX={state?.tooltipX}
                tooltipY={state?.tooltipY}
                stroke={color.BLACK}
                index={1}
                dataLength={BarData1.length}
                gridMax={9000}
                numberOfTicks={9}
              />
            )}
            <Svg>
              <Line
                key={"zero-yaxis"}
                x1={0}
                y1={0}
                x2={0}
                y2={ChartHeight}
                stroke={color.BLACK}
                strokeWidth={2}
              />
            </Svg>
            <Svg>
              <Line
                key={"zero-axis"}
                x1={0}
                y1={ChartHeight}
                x2={Dimensions.get("window").width}
                y2={ChartHeight}
                stroke={color.BLACK}
                strokeWidth={2}
              />
            </Svg>
          </BarChart>

          <XAxis
            data={BarData}
            style={{
              height: xAxisHeight,

              width: Dimensions.get("window").width,
            }}
            contentInset={{ left: moderateScale(35), right: moderateScale(20) }}
            min={0}
            max={BarData.length}
            svg={{
              fontSize: textScale(8),
              fontWeight: "bold",
              fill: "black",
            }}
            numberOfTicks={BarData.length}
            formatLabel={(value, index) => {
              return BarData[index]?.name;
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default GroupedBarChart;
