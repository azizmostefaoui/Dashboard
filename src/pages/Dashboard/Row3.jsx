import {  Paper, Stack, Typography } from "@mui/material";
import Pie from "../../pages/pie/Pie";
import Bar from "../bar/Bar";
import Geography from "../geography/Geography";

export default function Row3() {
  return (
    <Stack sx={{ display: "flex", flexDirection: "row", gap: 2,justifyContent:"space-between" }} flexWrap={"wrap"}>
      <Paper sx={{ minWidth: "32%", padding: 2 }}>
        <Typography  color="secondary"variant="h6" gutterBottom>
          Sales Distribution
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Overview of sales distribution across different categories.
        </Typography>
        <Pie isDashboard={true} />
      </Paper>

      <Paper sx={{ minWidth: "32%", padding: 2 }}>
        <Typography  color="secondary"variant="h6" gutterBottom>
          Employee Performance
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Analysis of employee performance based on various metrics.
        </Typography>
        <Bar isDashboard={true} />
      </Paper>

      <Paper sx={{ minWidth: "32%", padding: 2 }}>
        <Typography color="secondary" variant="h6" gutterBottom>
          Regional Insights
        </Typography>
        <Typography  variant="body2" color="textSecondary" gutterBottom>
          A geographical representation of key business insights.
        </Typography>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
}