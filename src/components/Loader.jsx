const Loader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid #e5e7eb",
    borderTop: "6px solid #2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// Add keyframes using normal CSS
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`, styleSheet.cssRules.length);

export default Loader;