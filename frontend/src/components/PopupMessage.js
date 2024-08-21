export function PopupMessage({ message, onClose, success }) {
  const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: success ? "green" : "red",
    color: "white",
    zIndex: 1000, // Make sure it's above other elements
    // Add other styling as needed
  };

  return (
    <div style={popupStyle}>
      <h2>{message}</h2>
    </div>
  );
}
