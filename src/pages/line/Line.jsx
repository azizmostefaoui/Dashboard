import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import PropTypes from "prop-types";

const data = [
  {
    id: "japan",
    color: "hsl(32, 70%, 50%)",
    data: [
      { x: "plane", y: 10 },
      { x: "helicopter", y: 162 },
      { x: "boat", y: 294 },
      { x: "train", y: 281 },
      { x: "subway", y: 264 },
      { x: "bus", y: 219 },
      { x: "car", y: 157 },
      { x: "moto", y: 44 },
      { x: "bicycle", y: 58 },
      { x: "horse", y: 249 },
      { x: "skateboard", y: 289 },
      { x: "others", y: 159 },
    ],
  },
  {
    id: "france",
    color: "hsl(85, 70%, 50%)",
    data: [
      { x: "plane", y: 214 },
      { x: "helicopter", y: 182 },
      { x: "boat", y: 175 },
      { x: "train", y: 297 },
      { x: "subway", y: 90 },
      { x: "bus", y: 110 },
      { x: "car", y: 274 },
      { x: "moto", y: 283 },
      { x: "bicycle", y: 57 },
      { x: "horse", y: 231 },
      { x: "skateboard", y: 56 },
      { x: "others", y: 114 },
    ],
  },
  {
    id: "us",
    color: "hsl(58, 70%, 50%)",
    data: [
      { x: "plane", y: 76 },
      { x: "helicopter", y: 113 },
      { x: "boat", y: 284 },
      { x: "train", y: 182 },
      { x: "subway", y: 295 },
      { x: "bus", y: 181 },
      { x: "car", y: 9 },
      { x: "moto", y: 290 },
      { x: "bicycle", y: 202 },
      { x: "horse", y: 135 },
      { x: "skateboard", y: 70 },
      { x: "others", y: 119 },
    ],
  },
  {
    id: "germany",
    color: "hsl(127, 70%, 50%)",
    data: [
      { x: "plane", y: 23 },
      { x: "helicopter", y: 61 },
      { x: "boat", y: 114 },
      { x: "train", y: 173 },
      { x: "subway", y: 162 },
      { x: "bus", y: 128 },
      { x: "car", y: 240 },
      { x: "moto", y: 203 },
      { x: "bicycle", y: 174 },
      { x: "horse", y: 286 },
      { x: "skateboard", y: 208 },
      { x: "others", y: 53 },
    ],
  },
  {
    id: "norway",
    color: "hsl(206, 70%, 50%)",
    data: [
      { x: "plane", y: 272 },
      { x: "helicopter", y: 139 },
      { x: "boat", y: 219 },
      { x: "train", y: 128 },
      { x: "subway", y: 109 },
      { x: "bus", y: 222 },
      { x: "car", y: 295 },
      { x: "moto", y: 293 },
      { x: "bicycle", y: 133 },
      { x: "horse", y: 92 },
      { x: "skateboard", y: 241 },
      { x: "others", y: 130 },
    ],
  },
];

function Line({ isDashboard = false }) {
  return (
    <Box sx={{ height: isDashboard ? { xs: "250px", sm: "300px", md: "250px" } : "75vh" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}

// Define propTypes outside of the function for cleaner code
Line.propTypes = {
  isDashboard: PropTypes.bool,
};

export default Line;
