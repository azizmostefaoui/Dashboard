export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#f5f5f5",
            paper: "#ffffff",
          },
          text: {
            primary: "#000000",
          },
        }
      : {
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
          },
        }),
  },
});
