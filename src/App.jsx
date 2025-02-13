import { useState, useMemo, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import TopBar from "./components/TopBar"; // Your TopBar component
import DrawerComponent from "./components/SideBar"; // Your DrawerComponent
import { getDesignTokens } from "./theme"; // Assuming getDesignTokens is exported from the theme file.
import { Outlet } from "react-router-dom";

export default function App() {
  // قراءة الوضع الافتراضي من localStorage، إذا كان موجودًا، أو افتراضيًا إلى "light"
  const [mode, setMode] = useState(() => localStorage.getItem("currentMode") || "light");

  // إنشاء الثيم بناءً على الوضع
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // تغيير الوضع وحفظه في localStorage
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("currentMode", newMode); // حفظ الوضع الجديد
  };

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // تعيين الوضع الابتدائي في localStorage عند تحميل التطبيق إذا لم يكن موجودًا
  useEffect(() => {
    if (!localStorage.getItem("currentMode")) {
      localStorage.setItem("currentMode", "light");
    }
  }, []);

  return (
    
     <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          mode={mode}
          toggleTheme={toggleTheme}
          
        />
        <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: theme.palette.background.paper, paddingTop: "64px", 
          }}
          
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
