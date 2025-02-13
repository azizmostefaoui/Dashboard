import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Box,
  styled,
  alpha,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// أنماط مربع البحث
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopBar({ open, handleDrawerOpen, mode, toggleTheme }) {
  // الأنماط الديناميكية لشريط التطبيق
  const appBarStyles = (theme) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: 240,
      width: `calc(100% - 240px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  });

  return (
    <AppBar position="fixed" sx={appBarStyles}>
      <Toolbar>
        {/* زر القائمة الجانبية */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ marginRight: 5, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        {/* مربع البحث */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>

        {/* مساحة المرونة */}
        <Box flexGrow={1} />

        {/* مجموعة الأيقونات */}
        <Stack direction="row" spacing={1}>
          {/* أيقونة تبديل الوضع */}
          <IconButton color="inherit" onClick={toggleTheme} aria-label="toggle theme">
            {mode === "light" ?  <DarkModeOutlinedIcon />: <LightModeOutlinedIcon />}
          </IconButton>
          {/* أيقونة الإشعارات */}
          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>
          {/* أيقونة الإعدادات */}
          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          {/* أيقونة الحساب */}
          <IconButton color="inherit">
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

// التحقق من المدخلات (Props)
TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
