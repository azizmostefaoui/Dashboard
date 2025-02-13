import { Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import PropTypes from "prop-types";

const data = [
  {
    "country": "AD",
    "hot dog": 14,
    "hot dogColor": "hsl(276, 70%, 50%)",
    "burger": 31,
    "burgerColor": "hsl(336, 70%, 50%)",
    "sandwich": 173,
    "sandwichColor": "hsl(350, 70%, 50%)",
    "kebab": 91,
    "kebabColor": "hsl(234, 70%, 50%)",
    "fries": 88,
    "friesColor": "hsl(116, 70%, 50%)",
    "donut": 12,
    "donutColor": "hsl(273, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 86,
    "hot dogColor": "hsl(155, 70%, 50%)",
    "burger": 120,
    "burgerColor": "hsl(248, 70%, 50%)",
    "sandwich": 142,
    "sandwichColor": "hsl(44, 70%, 50%)",
    "kebab": 145,
    "kebabColor": "hsl(347, 70%, 50%)",
    "fries": 96,
    "friesColor": "hsl(138, 70%, 50%)",
    "donut": 168,
    "donutColor": "hsl(287, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 114,
    "hot dogColor": "hsl(142, 70%, 50%)",
    "burger": 110,
    "burgerColor": "hsl(64, 70%, 50%)",
    "sandwich": 177,
    "sandwichColor": "hsl(319, 70%, 50%)",
    "kebab": 53,
    "kebabColor": "hsl(79, 70%, 50%)",
    "fries": 94,
    "friesColor": "hsl(349, 70%, 50%)",
    "donut": 109,
    "donutColor": "hsl(92, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 115,
    "hot dogColor": "hsl(82, 70%, 50%)",
    "burger": 163,
    "burgerColor": "hsl(82, 70%, 50%)",
    "sandwich": 5,
    "sandwichColor": "hsl(65, 70%, 50%)",
    "kebab": 56,
    "kebabColor": "hsl(12, 70%, 50%)",
    "fries": 39,
    "friesColor": "hsl(329, 70%, 50%)",
    "donut": 0,
    "donutColor": "hsl(38, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 86,
    "hot dogColor": "hsl(315, 70%, 50%)",
    "burger": 184,
    "burgerColor": "hsl(341, 70%, 50%)",
    "sandwich": 173,
    "sandwichColor": "hsl(146, 70%, 50%)",
    "kebab": 41,
    "kebabColor": "hsl(276, 70%, 50%)",
    "fries": 168,
    "friesColor": "hsl(265, 70%, 50%)",
    "donut": 19,
    "donutColor": "hsl(62, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 98,
    "hot dogColor": "hsl(127, 70%, 50%)",
    "burger": 103,
    "burgerColor": "hsl(83, 70%, 50%)",
    "sandwich": 138,
    "sandwichColor": "hsl(75, 70%, 50%)",
    "kebab": 138,
    "kebabColor": "hsl(239, 70%, 50%)",
    "fries": 172,
    "friesColor": "hsl(224, 70%, 50%)",
    "donut": 192,
    "donutColor": "hsl(86, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 56,
    "hot dogColor": "hsl(318, 70%, 50%)",
    "burger": 3,
    "burgerColor": "hsl(157, 70%, 50%)",
    "sandwich": 88,
    "sandwichColor": "hsl(57, 70%, 50%)",
    "kebab": 42,
    "kebabColor": "hsl(239, 70%, 50%)",
    "fries": 60,
    "friesColor": "hsl(186, 70%, 50%)",
    "donut": 36,
    "donutColor": "hsl(228, 70%, 50%)"
  }
];

export default function EmployeeBarChart({ isDashboard = false }) {
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
      />
    </Box>
  );
}

EmployeeBarChart.propTypes = {
  isDashboard: PropTypes.bool,
};

EmployeeBarChart.defaultProps = {
  isDashboard: false,
};
