import * as React from "react";
import { useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { color } from "../../assets/colorConstant";
import { YAxis, BarChart, XAxis } from "../../src";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../assets/responsiveSize";
import { Svg, Line } from "react-native-svg";

const BasicBarChart = (props) => {
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
      pv: 800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page H",
      uv: 4000,
      pv: 400,
      amt: 2400,
    },
    {
      name: "Page I",
      uv: 3000,
      pv: 3398,
      amt: 2210,
    },
    {
      name: "Page J",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page K",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page L",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page M",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page N",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const xAxisHeight = 20;
  const ChartHeight = 200;
  const BarData1 = BarData.map(({ pv }) => {
    return pv;
  });

 
  const BarDataY = BarData1.map((value, index) => ({
    value,
    svg: {
      hachureAngle: 60,
      hachureGap: 2,
      fill: color.BRIGHT_GREEN,

      key: `bar-${index}`,
    },
  }));

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        marginTop: moderateScaleVertical(200),
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <YAxis
          data={BarData}
          style={{
            paddingBottom: xAxisHeight,
            height: moderateScaleVertical(230),
            marginHorizontal: moderateScale(2),
          }}
          contentInset={{
            top: moderateScale(20),
            bottom: moderateScaleVertical(8),
          }}
          svg={{
            fontSize: textScale(9),
            fill: "black",
            fontFamily: "Virgil",
          }}
          min={0}
          max={9000}
          numberOfTicks={9}
          formatLabel={(value) => `${value}`}
        />
        <Svg>
          <Line
            key={"zero-yaxis"}
            x1={10}
            y1={0}
            x2={10}
            y2={ChartHeight}
            stroke={color.BLACK}
            strokeWidth={2}
          />
        </Svg>
      </View>

      <ScrollView
        horizontal={true}
        style={{
          width: Dimensions.get("window").width - moderateScale(80),
        }}
        scrollEnabled={BarData.length > 7 ? true : false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            width:
              BarData.length > 7
                ? Dimensions.get("window").width + (BarData.length - 7) * 20
                : Dimensions.get("window").width - moderateScale(32),
          }}
        >
          <BarChart
            style={{
              height: ChartHeight,

              marginBottom: moderateScaleVertical(10),
            }}
            contentInset={{
              right: moderateScale(10),
            }}
            data={BarDataY}
            yAccessor={({ item }) => item.value}
            gridMin={0}
            gridMax={9000}
            xMin={0}
            yMin={0}
            spacingInner={0.2}
            spacingOuter={0.4}
          >
            <Svg>
              <Line
                key={"zero-axis"}
                x1={0}
                y1={ChartHeight}
                x2={Dimensions.get("window").width + (BarData.length - 7) * 20}
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
              width: "auto",
            }}
            contentInset={{
              left: moderateScale(30),
            }}
            min={0}
            max={BarData.length}
            svg={{
              fontSize: textScale(8),
              fill: color.BLACK,
              fontFamily: "Virgil",
            }}
            numberOfTicks={BarData.length}
            formatLabel={(value, index) => {
              return BarData[index]?.name;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default BasicBarChart;
