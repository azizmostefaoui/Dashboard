import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" }, // Adjust alignment
          mb: 4,
          gap: 2, // Adds spacing on small screens
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>

        <Button
          variant="contained"
          startIcon={<DownloadOutlined />}
          sx={{
            textTransform: "capitalize",
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
            width: { xs: "100%", sm: "auto" }, // Full width on mobile
          }}
        >
          Download Reports
        </Button>
      </Box>

      {/* Main Content */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Row1 />
        </Grid>
        <Grid item xs={12}>
          <Row2 />
        </Grid>
        <Grid item xs={12}>
          <Row3 />
        </Grid>
      </Grid>
    </Container>
  );
}
