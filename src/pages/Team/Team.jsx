import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const rows = [
  {
    id: 1,
    name: "Mostefaoui Abdelaaziz",
    email: "azizmostefaouikmk@gmail.com",
    age: 25,
    phone: "0663647880",
    access: "Admin",
  },
  {
    id: 2,
    name: "Ahmad Ali",
    email: "ahmad.ali@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "Admin",
  },
  {
    id: 3,
    name: "Omar Khalid",
    email: "omar.khalid@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "Admin",
  },
  {
    id: 4,
    name: "Aisha Hassan",
    email: "aisha.hassan@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "Manager",
  },
  {
    id: 5,
    name: "Yusuf Abdullah",
    email: "yusuf.abdullah@gmail.com",
    age: 30,
    phone: "(235)124-6843",
    access: "User",
  },
  {
    id: 6,
    name: "Khadija Noor",
    email: "khadija.noor@gmail.com",
    age: 39,
    phone: "(335)654-4535",
    access: "User",
  },
  {
    id: 7,
    name: "Hana Ibrahim",
    email: "hana.ibrahim@gmail.com",
    age: 24,
    phone: "(777)123-5678",
    access: "Manager",
  },
];

export default function Team() {
  const theme = useTheme();

  const columns = [
    { field: 'id', headerName: 'ID', width: 150, align: "center", headerAlign: "center" },
    { field: 'name', headerName: 'Name', width: 150, align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'Email', width: 200, align: "center", headerAlign: "center" },
    { field: 'age', headerName: 'Age', width: 100, align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'Phone', width: 200, align: "center", headerAlign: "center" },
    {
      field: 'access',
      headerName: 'Access',
      width: 200,
      renderCell: (params) => {
        // تحديد الألوان بناءً على نوع الوصول
        const { access } = params.row;

const { bgcolor, textColor, Icon } = access === "Admin" ? {
    bgcolor: theme.palette.primary.main,
    textColor: theme.palette.primary.contrastText,
    Icon: AdminPanelSettingsOutlined
  } : access === "Manager" ? {
    bgcolor: theme.palette.secondary.main,
    textColor: theme.palette.secondary.contrastText,
    Icon: SecurityOutlined
  } : {
    bgcolor: theme.palette.warning.dark,
    textColor: theme.palette.warning.contrastText,
    Icon: LockOpenOutlined
};
      
        return (
          <Box
            sx={{
              p: "0.5rem",
              width: "100%",
              borderRadius: "0.5rem",
              display: 'flex',
              alignItems: "center",
              justifyContent: "center",
              bgcolor: bgcolor,
              color: textColor,
              boxShadow: theme.palette.mode === 'dark' ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
            }}
          >
            <Icon fontSize="small" />
            <Typography sx={{ fontSize: "13px", ml: 1 }}>
              {params.row.access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
