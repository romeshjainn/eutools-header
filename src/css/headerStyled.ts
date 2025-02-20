import { styled } from "@mui/material";

export const HeaderStyled = styled("div")(() => ({
  "& .SubHeader ": {
    background: "#fff",
    height: "70px",
    fontFamily: "Inter, sans-serif",
    position: "relative",
  },
  "& .submenu": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0px",
    fontFamily: "Inter, sans-serif",
    position: "fixed",
    width: "100%",
    background: "#fff",
    zIndex: "999",
    padding: "0px -70px",
    height: "70px",
    boxShadow: " -6px 2px 7px 1px #EDEDED",
  },
  "& .profile": {
    position: "absolute",
    right: "0",
    top: "54px",
    background: "#fff",
    width: "256px",
    padding: "12px 12px",
    borderRadius: "8px",
    zIndex: "999",
    boxShadow: "0px 0px 7px #ccc",
    fontFamily: "Inter, sans-serif",
  },
  "& .profile ul li": {
    padding: "10px 0px",
    borderBottom: "1px solid #e9e9e9",
  },
  "& .profile.headerMenu ": {
    width: "380px",
    textAlign: "center",
  },
  "& .notification": {
    display: "flex",
    alignItems: "center",
    fontFamily: "Inter, sans-serif",
  },
  "& .notification h6,p": {
    margin: "10px",
    fontFamily: "Inter, sans-serif",
  },
  "& .total": {
    border: "1px solid #C9C9C9",
    borderRadius: "6px",
    padding: "4px 8px 4px 8px",
    color: "#666666",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    fontFamily: "Inter, sans-serif",
  },
}));
export default HeaderStyled;
