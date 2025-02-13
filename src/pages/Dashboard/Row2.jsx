import { Box, Paper, Stack, Typography, IconButton } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Line from '../../pages/line/Line';

const transactions = [
  { id: 1, title: "Payment ", details: "From Client A", amount: "Completed", status: "$500" },
  { id: 2, title: "Invoice ", details: "To Client B", amount: "Pending", status: "$300" },
  { id: 3, title: "Refund ", details: "For Order #123", amount: "Refunded", status: "-$150" },
  { id: 4, title: "Subscription", details: "Monthly Plan", amount: "Completed", status: "$20" },
  { id: 5, title: "Wire ", details: "Bank Payment", amount: "Completed", status: "$1,200" },
  { id: 6, title: "Payment ", details: "From Client C", amount: "Completed", status: "$250" },
  { id: 7, title: "Withdrawal", details: "To PayPal", amount: "Pending", status: "-$100" },
  { id: 8, title: "Deposit", details: "Bank Transfer", amount: "Completed", status: "$2,000" },
  { id: 9, title: "Chargeback", details: "Dispute Case", amount: "Refunded", status: "-$500" },
  { id: 10, title: "Invoice ", details: "By Client D", amount: "Completed", status: "$400" }
];

const Row2 = () => {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2}>
      {/* الرسم البياني */}
      <Paper sx={{  maxWidth: 900, flexGrow: 1, height: 350, p: 2 }}>
        {/* الإيرادات وزر التحميل */}
        <Stack direction={"row"} flexWrap={"wrap"} alignItems={"center"} justifyContent={'space-between'}>
          <Box>
            <Typography
              color={(theme) => theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlinedIcon />
            </IconButton>
          </Box>
        </Stack> 
        <Line isDashboard={true} />
      </Paper>

      {/* المعاملات الأخيرة */}
      <Box sx={{  height: 350, flexGrow: 1, p: 2, overflowY: "auto" }}>
        <Paper>
          <Typography color="secondary" fontWeight="bold" p={1.2} variant="h6">
            Recent Transactions
          </Typography>
        </Paper>

        {/* تفاصيل المعاملات (10 عناصر ديناميكية) */}
        {transactions.map((transaction) => (
          <Paper
            key={transaction.id}
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1.2,
              height: 50,  // جعل ارتفاع كل عنصر ثابت
            }}
          >
            <Box>
              <Typography variant="body1" fontWeight="600">
                {transaction.title}
              </Typography>
              <Typography variant="body2">{transaction.details}</Typography>
            </Box>

            <Typography variant="body1">{transaction.amount}</Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={(theme) =>
                transaction.status === "Completed"
                  ? theme.palette.success.main
                  : transaction.status === "Pending"
                  ? theme.palette.warning.main
                  : theme.palette.error.main
              }
              color={(theme) =>
                transaction.status === "Completed"
                  ? theme.palette.getContrastText(theme.palette.success.main)
                  : transaction.status === "Pending"
                  ? theme.palette.getContrastText(theme.palette.warning.main)
                  : theme.palette.getContrastText(theme.palette.error.main)
              }
              variant="body2"
            >
              {transaction.status}
            </Typography>
          </Paper>
        ))}
      </Box>

    </Stack>
  );
}

export default Row2;
