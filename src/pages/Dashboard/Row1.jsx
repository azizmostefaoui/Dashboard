import { Paper, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarChartIcon from "@mui/icons-material/BarChart"; 

const data = [
    { icon: <EmailIcon sx={{ color: "#1976D2", fontSize: 40 }} />, text1: "Email Sent", text2: "13,456", percentage: "65%" },
    { icon: <PointOfSaleIcon sx={{ color: "#388E3C", fontSize: 40 }} />, text1: "Sales Obtained", text2: "400,456", percentage: "78%" },
    { icon: <PersonAddIcon sx={{ color: "#D32F2F", fontSize: 40 }} />, text1: "New Client", text2: "40,456", percentage: "52%" },
    { icon: <TrafficIcon sx={{ color: "#FBC02D", fontSize: 40 }} />, text1: "Traffic Received", text2: "1,345,203", percentage: "90%" },
  ];
  

export default function Row1() {
  return (
    <Stack 
      direction="row" 
      sx={{ justifyContent: { xs: "center", sm: "space-between" }, flexWrap: "wrap" }} 
      gap={1}
    >
      {data.map((item, index) => (
        <Paper
          key={index}
          sx={{
            minWidth: "24%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            textAlign: "center",
          }}
        >
         
          {item.icon}

         
          <Stack direction="column">
            <Typography variant="h6" fontWeight="bold">
              {item.text2}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.text1}
            </Typography>
          </Stack>

         
          <Stack direction="column" alignItems="center" mt={1}>
            <BarChartIcon sx={{ fontSize: 30, color: "gray" }} /> 
            <Typography fontWeight="bold">{item.percentage}</Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}
