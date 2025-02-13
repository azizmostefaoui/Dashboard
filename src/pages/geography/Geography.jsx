import { Box } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./DataApi";
import PropTypes from "prop-types";

const data = [
  {
    id: "AFG",
    value: 767297,
  },
  {
    id: "AGO",
    value: 530429,
  },
  {
    id: "ALB",
    value: 894352,
  },
  {
    id: "ARE",
    value: 801980,
  },
  {
    id: "ARG",
    value: 985714,
  },
  {
    id: "ARM",
    value: 587902,
  },
  {
    id: "ATA",
    value: 346615,
  },
  {
    id: "ATF",
    value: 453919,
  },
  {
    id: "AUT",
    value: 190421,
  },
  {
    id: "AZE",
    value: 784642,
  },
  {
    id: "BDI",
    value: 271028,
  },
  {
    id: "BEL",
    value: 694061,
  },
  {
    id: "BEN",
    value: 256738,
  },
  {
    id: "BFA",
    value: 550576,
  },
  {
    id: "BGD",
    value: 959514,
  },
  {
    id: "BGR",
    value: 956971,
  },
  {
    id: "BHS",
    value: 378884,
  },
  {
    id: "BIH",
    value: 929971,
  },
  {
    id: "BLR",
    value: 261101,
  },
  {
    id: "BLZ",
    value: 837012,
  },
  {
    id: "BOL",
    value: 246012,
  },
  {
    id: "BRN",
    value: 579471,
  },
  {
    id: "BTN",
    value: 760422,
  },
  {
    id: "BWA",
    value: 331308,
  },
  {
    id: "CAF",
    value: 297149,
  },
  {
    id: "CAN",
    value: 577495,
  },
  {
    id: "CHE",
    value: 132273,
  },
  {
    id: "CHL",
    value: 321088,
  },
  {
    id: "CHN",
    value: 503815,
  },
  {
    id: "CIV",
    value: 454523,
  },
  {
    id: "CMR",
    value: 275452,
  },
  {
    id: "COG",
    value: 141099,
  },
  {
    id: "COL",
    value: 434056,
  },
  {
    id: "CRI",
    value: 210766,
  },
  {
    id: "CUB",
    value: 628398,
  },
  {
    id: "-99",
    value: 469310,
  },
  {
    id: "CYP",
    value: 160015,
  },
  {
    id: "CZE",
    value: 773731,
  },
  {
    id: "DEU",
    value: 294952,
  },
  {
    id: "DJI",
    value: 635876,
  },
  {
    id: "DNK",
    value: 117725,
  },
  {
    id: "DOM",
    value: 680702,
  },
  {
    id: "DZA",
    value: 805917,
  },
  {
    id: "ECU",
    value: 677850,
  },
  {
    id: "EGY",
    value: 334822,
  },
  {
    id: "ERI",
    value: 979401,
  },
  {
    id: "ESP",
    value: 974683,
  },
  {
    id: "EST",
    value: 801608,
  },
  {
    id: "ETH",
    value: 578021,
  },
  {
    id: "FIN",
    value: 372427,
  },
  {
    id: "FJI",
    value: 901825,
  },
  {
    id: "FLK",
    value: 940735,
  },
  {
    id: "FRA",
    value: 115916,
  },
  {
    id: "GAB",
    value: 646102,
  },
  {
    id: "GBR",
    value: 825446,
  },
  {
    id: "GEO",
    value: 149149,
  },
  {
    id: "GHA",
    value: 808417,
  },
  {
    id: "GIN",
    value: 791668,
  },
  {
    id: "GMB",
    value: 659434,
  },
  {
    id: "GNB",
    value: 625473,
  },
  {
    id: "GNQ",
    value: 739898,
  },
  {
    id: "GRC",
    value: 567007,
  },
  {
    id: "GTM",
    value: 591289,
  },
  {
    id: "GUY",
    value: 800526,
  },
  {
    id: "HND",
    value: 936616,
  },
  {
    id: "HRV",
    value: 684322,
  },
  {
    id: "HTI",
    value: 181050,
  },
  {
    id: "HUN",
    value: 367858,
  },
  {
    id: "IDN",
    value: 452895,
  },
  {
    id: "IND",
    value: 693709,
  },
  {
    id: "IRL",
    value: 771881,
  },
  {
    id: "IRN",
    value: 160872,
  },
  {
    id: "IRQ",
    value: 467500,
  },
  {
    id: "ISL",
    value: 560468,
  },
  {
    id: "ISR",
    value: 206881,
  },
  {
    id: "ITA",
    value: 729222,
  },
  {
    id: "JAM",
    value: 180328,
  },
  {
    id: "JOR",
    value: 542281,
  },
  {
    id: "JPN",
    value: 171282,
  },
  {
    id: "KAZ",
    value: 980873,
  },
  {
    id: "KEN",
    value: 717869,
  },
  {
    id: "KGZ",
    value: 564504,
  },
  {
    id: "KHM",
    value: 861133,
  },
  {
    id: "OSA",
    value: 798558,
  },
  {
    id: "KWT",
    value: 219514,
  },
  {
    id: "LAO",
    value: 917542,
  },
  {
    id: "LBN",
    value: 317489,
  },
  {
    id: "LBR",
    value: 394218,
  },
  {
    id: "LBY",
    value: 756476,
  },
  {
    id: "LKA",
    value: 238424,
  },
  {
    id: "LSO",
    value: 217429,
  },
  {
    id: "LTU",
    value: 698099,
  },
  {
    id: "LUX",
    value: 709750,
  },
  {
    id: "LVA",
    value: 253943,
  },
  {
    id: "MAR",
    value: 769318,
  },
  {
    id: "MDA",
    value: 494668,
  },
  {
    id: "MDG",
    value: 761085,
  },
  {
    id: "MEX",
    value: 240542,
  },
  {
    id: "MKD",
    value: 973600,
  },
  {
    id: "MLI",
    value: 308525,
  },
  {
    id: "MMR",
    value: 871019,
  },
  {
    id: "MNE",
    value: 386326,
  },
  {
    id: "MNG",
    value: 91926,
  },
  {
    id: "MOZ",
    value: 192743,
  },
  {
    id: "MRT",
    value: 697841,
  },
  {
    id: "MWI",
    value: 146845,
  },
  {
    id: "MYS",
    value: 630583,
  },
  {
    id: "NAM",
    value: 55411,
  },
  {
    id: "NCL",
    value: 571840,
  },
  {
    id: "NER",
    value: 702633,
  },
  {
    id: "NGA",
    value: 545253,
  },
  {
    id: "NIC",
    value: 778592,
  },
  {
    id: "NLD",
    value: 522041,
  },
  {
    id: "NOR",
    value: 527378,
  },
  {
    id: "NPL",
    value: 104196,
  },
  {
    id: "NZL",
    value: 106983,
  },
  {
    id: "OMN",
    value: 567405,
  },
  {
    id: "PAK",
    value: 387498,
  },
  {
    id: "PAN",
    value: 134972,
  },
  {
    id: "PER",
    value: 942572,
  },
  {
    id: "PHL",
    value: 973959,
  },
  {
    id: "PNG",
    value: 224098,
  },
  {
    id: "POL",
    value: 228936,
  },
  {
    id: "PRI",
    value: 151326,
  },
  {
    id: "PRT",
    value: 583717,
  },
  {
    id: "PRY",
    value: 108480,
  },
  {
    id: "QAT",
    value: 208390,
  },
  {
    id: "ROU",
    value: 302387,
  },
  {
    id: "RUS",
    value: 629266,
  },
  {
    id: "RWA",
    value: 760904,
  },
  {
    id: "ESH",
    value: 515919,
  },
  {
    id: "SAU",
    value: 451726,
  },
  {
    id: "SDN",
    value: 646554,
  },
  {
    id: "SDS",
    value: 545045,
  },
  {
    id: "SEN",
    value: 57249,
  },
  {
    id: "SLB",
    value: 390435,
  },
  {
    id: "SLE",
    value: 266333,
  },
  {
    id: "SLV",
    value: 888564,
  },
  {
    id: "ABV",
    value: 975837,
  },
  {
    id: "SOM",
    value: 369457,
  },
  {
    id: "SRB",
    value: 52511,
  },
  {
    id: "SUR",
    value: 902822,
  },
  {
    id: "SVK",
    value: 508453,
  },
  {
    id: "SVN",
    value: 302299,
  },
  {
    id: "SWZ",
    value: 909326,
  },
  {
    id: "SYR",
    value: 331340,
  },
  {
    id: "TCD",
    value: 14743,
  },
  {
    id: "TGO",
    value: 856742,
  },
  {
    id: "THA",
    value: 281408,
  },
  {
    id: "TJK",
    value: 721656,
  },
  {
    id: "TKM",
    value: 496765,
  },
  {
    id: "TLS",
    value: 405697,
  },
  {
    id: "TTO",
    value: 227753,
  },
  {
    id: "TUN",
    value: 478932,
  },
  {
    id: "TUR",
    value: 309098,
  },
  {
    id: "TWN",
    value: 682584,
  },
  {
    id: "TZA",
    value: 453011,
  },
  {
    id: "UGA",
    value: 428607,
  },
  {
    id: "UKR",
    value: 206736,
  },
  {
    id: "URY",
    value: 185444,
  },
  {
    id: "USA",
    value: 526890,
  },
  {
    id: "UZB",
    value: 42916,
  },
  {
    id: "VEN",
    value: 510590,
  },
  {
    id: "VNM",
    value: 647298,
  },
  {
    id: "VUT",
    value: 675979,
  },
  {
    id: "PSE",
    value: 830883,
  },
  {
    id: "YEM",
    value: 972444,
  },
  {
    id: "ZAF",
    value: 713548,
  },
  {
    id: "ZMB",
    value: 10231,
  },
  {
    id: "ZWE",
    value: 979195,
  },
  {
    id: "KOR",
    value: 903912,
  },
];
export default function Geography({ isDashboard = false }) {
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveChoropleth
        data={data}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#000",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
        ]}
        fill={[
          {
            match: {
              id: "CAN",
            },
            id: "dots",
          },
          {
            match: {
              id: "CHN",
            },
            id: "lines",
          },
          {
            match: {
              id: "ATA",
            },
            id: "gradient",
          },
        ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
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
Geography.propTypes = {
  isDashboard: PropTypes.bool,
};
