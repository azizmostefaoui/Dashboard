import PropTypes from "prop-types";
import {
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleOutlined, PersonOutlined, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { grey } from '@mui/material/colors';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DrawerComponent({ open, handleDrawerClose }) {
  DrawerComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
  };


  const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlined />, path: "/team" },
    { text: "Contacts Information", icon: <ContactsOutlined />, path: "/contacts" },
    { text: "Invoices Balances", icon: <ReceiptOutlined />, path: "/invoices" },
  ];
  
  const Array2 = [
    { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
    { text: "FAQ Page", icon: <HelpOutlineOutlined />, path: "/faq" },
  ];
  
  const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
  ];
  





const theme=useTheme();
const navigate = useNavigate();

  return (
    <DrawerStyled variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar sx={{mx:"auto", height:open?  88 :55,width:open?  88 :55,my:1 ,border:"2px solid gray",transition:"0.25s"}} alt="Aziz Sharp" src="dist/assets/aziz.png" />
      <Typography align="center" sx={{fontSize: open? 17 :0,transition:"0.25s"}}>abdelaaziz </Typography>
      <Typography align="center" sx={{fontSize: open? 15 :0,transition:"0.25s",color: theme.palette.info.main}}>admin</Typography>
      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,bgcolor: location.pathname===item.path ?theme.palette.mode==="dark"? grey[800]:grey[300]: null
              }}
              onClick={() => { 
                navigate(item.path)
               }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
              { item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,bgcolor: location.pathname===item.path ?theme.palette.mode==="dark"? grey[800]:grey[300]: null
              }}
              onClick={() => { 
                navigate(item.path)
               }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,bgcolor: location.pathname===item.path ?theme.palette.mode==="dark"? grey[800]:grey[300]: null
              }}
              onClick={() => { 
                navigate(item.path)
               }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerStyled>
  );
}
